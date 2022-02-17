import { fabric } from 'fabric'
import { ITextOptions } from 'fabric/fabric-impl'
import FontFaceObserver from 'fontfaceobserver'
import React, { useEffect, useMemo, useState } from 'react'
import { renderTextLine } from 'utils/renderTextLine'
import { useCanvas, useParams } from 'hooks'
import { useQuery } from 'urql'
import {
	FindJobsDocument,
	FindJobsQuery,
	FindJobsQueryVariables,
} from 'gql/generated'
import { renderBackground, roundRect } from 'utils'
import {
	colDescriptionTextOptions,
	colTitleTextOptions,
	headerTextOptions,
	heroTextOptions,
} from './canvas.style'
import { format } from 'date-fns'
import { decodeHTML } from 'entities'

export default function Canvas() {
	const params = useParams('slug')
	const [result] = useQuery<FindJobsQuery, FindJobsQueryVariables>({
		query: FindJobsDocument,
		variables: {
			input: {
				slug: params,
			},
		},
		context: useMemo(
			() => ({
				url: import.meta.env.PUBLIC_DGTALAPI,
			}),
			[],
		),
		pause: !params,
	})
	const [show, setShow] = useState(false)

	const uploadedImage = React.useRef(null)
	const imageUploader = React.useRef(null)

	const [fc, setRef] = useCanvas(async (canvas) => {
		const font = new FontFaceObserver('Poppins')
		await font.load()
		canvas.requestRenderAll()

		CanvasRenderingContext2D.prototype['roundRect'] = roundRect

		const locationType = new fabric.IText('Full Remote', {
			...headerTextOptions,
			left: 341,
			name: 'locationType',
		})
		const jobType = new fabric.IText('Freelance', {
			...headerTextOptions,
			left: 576,
			name: 'jobType',
		})
		const dash = new fabric.Text('-', {
			...headerTextOptions,
			left: 552,
		})
		const group = new fabric.Group([locationType, dash, jobType], {
			lockMovementY: true,
		})

		group.centerH()
		canvas.add(group)
		group.toActiveSelection()

		const companyCircle = new fabric.Circle({
			radius: 289.76 / 2,
			left: 103,
			top: 163.62,
			fill: '#fff',
		})
		const companyCircleOutline = new fabric.Circle({
			radius: 289.76 / 2,
			left: 130.24,
			top: 150,
			fill: 'transparent',
			strokeWidth: 1,
			stroke: '#fff',
		})

		canvas.add(companyCircle, companyCircleOutline)

		const companyName = new fabric.IText('Cakefever', {
			...heroTextOptions,
			top: heroTextOptions.top + 95.5,
			fontWeight: 600,
			fontSize: 52,
			name: 'companyName',
		})
		const positionTitle = new fabric.IText('Posisi :', {
			...heroTextOptions,
			top: heroTextOptions.top + 173.5,
			fontSize: 36,
		})
		const position = new fabric.Textbox('Freelance Content writing', {
			...heroTextOptions,
			top: heroTextOptions.top + 227.5,
			fontWeight: 600,
			fontSize: 36,
			width: 550,
			name: 'position',
		})
		const deadlineTitle = new fabric.IText('Deadline :', {
			...heroTextOptions,
			top: heroTextOptions.top + 287.5 + position.height,
			fontSize: 36,
		})
		const deadline = new fabric.IText('9 Februari 2022', {
			...heroTextOptions,
			top: heroTextOptions.top + 287.5 + position.height,
			left: heroTextOptions.left + deadlineTitle.width + 10,
			fontSize: 36,
			name: 'deadline',
		})

		canvas.add(positionTitle, position, companyName, deadlineTitle, deadline)

		const col1Title = new fabric.IText('Requirements', colTitleTextOptions)
		const col1Description = new fabric.Textbox(
			`Excellent writing and content strategy skills
Between 1-2 years overall work experience as a hands-on writer in the industry
Excellent in Indonesian and English communications (both verbal and written)
An understanding of how content design connects to business objectives
Interest in food`,
			{ ...colDescriptionTextOptions, name: 'col1Description' },
		)

		col1Description._renderTextLine = renderTextLine

		const col2Title = new fabric.IText('About', {
			...colTitleTextOptions,
			left: 560,
		})

		const col2Description = new fabric.Textbox(
			`CakeFever is a platform that provides information about food recipes and easy and simple cooking tips that are addressed to those who have interest in food and cooking, and we need a skillful individual like you to be our content writer.`,
			{
				...colDescriptionTextOptions,
				left: 560 + 25,
				name: 'col2Description',
			},
		)
		col2Description._renderTextLine = renderTextLine

		canvas.add(col1Description, col1Title, col2Description, col2Title)

		const howToApply = new fabric.IText('recruitment.cakefever@gmail.com', {
			top: 895 + 5,
			fill: '#fff',
			backgroundColor: '#02A393',
			fontFamily: 'Poppins',
			fontSize: 21,
			fontWeight: 500,
			left: 40 + 553.5,
			bgCornerRadius: 8,
			padding: 20,
			name: 'howToApply',
		} as ITextOptions)
		fabric.IText.prototype['_renderBackground'] = renderBackground
		fabric.IText.prototype.set({
			_getNonTransformedDimensions() {
				// Object dimensions
				return new fabric.Point(this.width, this.height).scalarAdd(this.padding)
			},
			_calculateCurrentDimensions() {
				// Controls dimensions
				return fabric.util.transformPoint(
					this._getTransformedDimensions(),
					this.getViewportTransform(),
					true,
				)
			},
		} as unknown as keyof fabric.IText)
		const howToApplyDescription = new fabric.IText(
			'Untuk Melamar, upload CV & Portofolio ke email',
			{
				top: 895 + 15.5,
				fill: '#02A393',
				fontFamily: 'Poppins',
				fontSize: 21,
				fontWeight: 700,
				left: 35.5 + 40,
			},
		)
		canvas.add(howToApplyDescription, howToApply)
		const footerTextOptions = {
			fontSize: 18,
			fontFamily: 'Lato',
			fill: '#02A393',
			lineHeight: 1.5,
			top: 1025.47,
			left: 99.2,
		} as fabric.TextOptions
		const websiteLogo = new fabric.Path(
			'M16.96 14.77a19 19 0 0 0 .16-2.3 19 19 0 0 0-.16-2.3h3.89c.18.73.3 1.5.3 2.3 0 .8-.12 1.56-.3 2.3h-3.9Zm-2.04 6.4a18 18 0 0 0 1.59-4.1h3.4a9.23 9.23 0 0 1-4.99 4.1Zm-.28-6.4H9.25a15.26 15.26 0 0 1 0-4.6h5.39c.1.75.18 1.52.18 2.3 0 .78-.08 1.54-.18 2.3Zm-2.7 6.85a15.6 15.6 0 0 1-2.2-4.55h4.4a15.6 15.6 0 0 1-2.2 4.55ZM7.34 7.87H4a9.11 9.11 0 0 1 4.96-4.1 19.82 19.82 0 0 0-1.6 4.1ZM4 17.07h3.35c.4 1.44.92 2.82 1.61 4.1A9.2 9.2 0 0 1 4 17.06Zm-.95-2.3c-.18-.74-.3-1.5-.3-2.3 0-.8.12-1.57.3-2.3h3.89a19 19 0 0 0-.16 2.3 19 19 0 0 0 .16 2.3H3.04Zm8.9-11.47a15.66 15.66 0 0 1 2.2 4.57h-4.4a15.66 15.66 0 0 1 2.2-4.57Zm7.96 4.57h-3.39a18 18 0 0 0-1.59-4.1 9.18 9.18 0 0 1 4.98 4.1ZM11.94.97a11.51 11.51 0 0 0 0 23 11.5 11.5 0 0 0 0-23Z',
			{
				top: 1025.47,
				left: 99.2,
				fill: '#02A393',
			},
		)
		const bioLinkLogo = new fabric.Path(
			'M4.4 4.73V2.88c0-.26-.15-.39-.43-.39h-1.3v2.63h1.3c.29 0 .43-.13.43-.39Zm0 4.21V7.02c0-.14-.04-.23-.1-.28-.06-.07-.17-.1-.33-.1h-1.3v2.69h1.3c.29 0 .43-.13.43-.39ZM.44.97h4.18c1.34 0 2 .57 2 1.71v1.74c0 .77-.23 1.25-.7 1.45.47.17.7.62.7 1.33v1.93c0 1.15-.66 1.72-2 1.72H.44V.97Zm7.57 0h2.24v9.88H8.01V.97Zm5.66 0h2.12c1.33 0 2 .57 2 1.71v6.45c0 1.15-.67 1.72-2 1.72h-2.12c-1.33 0-2-.57-2-1.72V2.68c0-1.14.67-1.71 2-1.71Zm1.85 7.86V3c0-.26-.13-.39-.4-.39h-.77c-.28 0-.42.13-.42.39v5.84c0 .26.14.4.42.4h.76c.28 0 .41-.14.41-.4Zm5.04 2c-.76 0-1.37-.6-1.37-1.34V9.4a1.32 1.32 0 0 1 .4-.95 1.37 1.37 0 0 1 1.49-.29 1.36 1.36 0 0 1 .73.73c.07.16.1.34.1.51v.09c0 .74-.6 1.34-1.35 1.34ZM2.7 21.33h2.89v1.64H.45v-9.89H2.7v8.26Zm3.67-8.24H8.6v9.88H6.37v-9.88Zm7.92 0h2.07v9.88h-2.02l-2.2-5.92v5.92h-2.05v-9.89h2.04l2.16 5.9v-5.9Zm10.15 0-2.02 4.87 2.02 5h-2.43l-1.94-5L22 13.08h2.43Zm-6.67 9.88v-9.89h2.25v9.89h-2.25Z',
			{
				top: 1025.47,
				left: 99.2 + 106,
				fill: '#02A393',
			},
		)
		const facebookLogo = new fabric.Path(
			'M11.44.97c-6.07 0-11 4.95-11 11.07 0 5.52 4.03 10.1 9.29 10.93v-7.74h-2.8v-3.2h2.8V9.6c0-2.78 1.64-4.3 4.15-4.3 1.2 0 2.46.2 2.46.2v2.73h-1.39c-1.36 0-1.79.85-1.79 1.73v2.07h3.05l-.49 3.2h-2.56v7.74c5.26-.83 9.28-5.41 9.28-10.93 0-6.12-4.92-11.07-11-11.07Z',
			{
				top: 1025.47,
				left: 99.2 + 259,
				fill: '#02A393',
			},
		)
		const instagramLogo = new fabric.Path(
			'M11.94 8.63a3.84 3.84 0 0 0 0 7.67 3.84 3.84 0 0 0 0-7.67Zm11.5 3.84c0-1.59.02-3.16-.07-4.75-.1-1.84-.51-3.47-1.86-4.82s-2.98-1.77-4.82-1.86C15.1.96 13.53.97 11.94.97c-1.58 0-3.16-.01-4.74.07-1.84.1-3.48.51-4.82 1.86C1.03 4.25.6 5.88.52 7.72.43 9.31.45 10.88.45 12.47c0 1.58-.02 3.16.07 4.75.09 1.84.5 3.47 1.86 4.82 1.34 1.35 2.98 1.76 4.82 1.85 1.59.1 3.16.08 4.74.08 1.6 0 3.17.01 4.75-.08 1.84-.09 3.48-.5 4.82-1.85 1.35-1.35 1.77-2.98 1.86-4.82.09-1.59.07-3.16.07-4.75Zm-11.5 5.9a5.9 5.9 0 1 1-.02-11.79 5.9 5.9 0 0 1 .02 11.79ZM18.08 7.7a1.38 1.38 0 1 1 0-2.75 1.38 1.38 0 0 1 0 2.75Z',
			{
				top: 1025.47,
				left: 99.2 + 466,
				fill: '#02A393',
			},
		)
		const discordLogo = new fabric.Path(
			'M36.62 21.8c-.92.95-3.74 3.87-9.4 3.99 0 0-1.16-1.32-2-2.48 3.98-1.14 5.5-3.4 5.55-3.47-7.85 4.94-14.74 4.17-22.98.83-.07 0-.1-.03-.15-.08v-.02c-.04-.03-.08-.06-.15-.06h-.15a8.27 8.27 0 0 0-.84-.5c.05.07 1.57 2.34 5.38 3.48-1.01 1.16-2.02 2.48-2.02 2.48C2.96 25.8.44 21.5.44 21.5.44 11.9 4.98 4.1 4.98 4.1 9.52.81 13.73.97 13.73.97l.34.33C8.5 2.63 6 5.11 6 5.11l.2-.1c1.6-.78 12.2-5.97 24.85.26-.07-.07-2.6-2.34-7.73-3.8l.46-.46c.72 0 4.54.14 8.62 3.12 0 0 4.56 7.8 4.56 17.39-.03-.04-.14.08-.34.29Zm-9.1-6.6a3.26 3.26 0 0 1-3.2 3.32 3.26 3.26 0 0 1-3.19-3.3 3.26 3.26 0 0 1 3.2-3.31v-.01c1.76 0 3.19 1.49 3.19 3.3Zm-14.63 3.32c1.76 0 3.2-1.48 3.2-3.31 0-1.82-1.43-3.31-3.2-3.31a3.26 3.26 0 0 0-3.2 3.32c0 1.82 1.44 3.3 3.2 3.3Z',
			{
				top: 1025.47,
				left: 99.2 + 667,
				fill: '#02A393',
				fillRule: 'evenodd',
			},
		)
		const website = new fabric.IText('dgtal.id', {
			...footerTextOptions,
			left: 99.2 + 28,
		})
		const bioLink = new fabric.IText('bio.link/dgtal', {
			...footerTextOptions,
			left: 99.2 + 106 + 29,
		})
		const facebookUrl = new fabric.IText('indonesia freelancer', {
			...footerTextOptions,
			left: 99.2 + 259 + 27,
		})
		const instagramUrl = new fabric.IText('indonesia_freelancer', {
			...footerTextOptions,
			left: 99.2 + 466 + 28,
		})
		const discordUrl = new fabric.IText('bit.ly/discordkri', {
			...footerTextOptions,
			left: 99.2 + 667 + 41.52,
		})
		canvas.add(
			websiteLogo,
			website,
			bioLinkLogo,
			bioLink,
			facebookLogo,
			facebookUrl,
			instagramLogo,
			instagramUrl,
			discordLogo,
			discordUrl,
		)

		fabric.Image.fromURL('Frame 1080.png', function (oImg) {
			canvas.setBackgroundImage(oImg, canvas.renderAll.bind(canvas))
		})

		fabric.Image.fromURL('placeholder.png', (image) => {
			image.scaleToWidth(232)
			image.scaleToHeight(232)

			const patternSourceCanvas = new fabric.StaticCanvas('')
			patternSourceCanvas.add(image)
			patternSourceCanvas.setDimensions({
				width: 232,
				height: 232,
			})
			const pattern = new fabric.Pattern({
				source: patternSourceCanvas.getElement() as unknown as string,
			})

			const newImage = new fabric.Circle({
				top: 193.1,
				left: 131,
				radius: 232 / 2,
				fill: pattern,
				name: 'companyImage',
			})

			fc.current.add(newImage)
		})
	})

	const handleImageUpload = (e) => {
		const [file] = e.target.files
		if (file) {
			const reader = new FileReader()
			const { current } = uploadedImage
			current.file = file
			reader.onload = (e) => {
				current.src = e.target.result

				const imgObj = new Image()
				imgObj.src = e.target.result as string
				imgObj.onload = function () {
					const image = new fabric.Image(imgObj)

					image.scaleToWidth(232)
					image.scaleToHeight(232)

					const patternSourceCanvas = new fabric.StaticCanvas('')
					patternSourceCanvas.add(image)
					patternSourceCanvas.setDimensions({
						width: 232,
						height: 232,
					})
					const pattern = new fabric.Pattern({
						source: patternSourceCanvas.getElement() as unknown as string,
					})
					if (fc.current.getActiveObject().name === 'companyImage')
						fc.current.remove(fc.current.getActiveObject())

					const newImage = new fabric.Circle({
						top: 193.1,
						left: 131,
						radius: 232 / 2,
						fill: pattern,
						objectCaching: false,
						name: 'companyImage',
					})

					fc.current.add(newImage)

					fc.current.setActiveObject(newImage)
				}
			}
			reader.readAsDataURL(file)
		}
	}

	useEffect(() => {
		if (fc.current && result.data?.findJobs) {
			const {
				findJobs: {
					companyName,
					position,
					location: { type: locationType },
					type: jobType,
					howToApply,
					description,
					isShowEndDate,
					endDate,
				},
			} = result.data

			fc.current.getObjects().forEach((object) => {
				if (object.name === 'companyName') {
					;(object as fabric.IText).set({ text: companyName })
				}
				if (object.name === 'position') {
					;(object as fabric.Textbox).set({ text: position })
				}
				if (object.name === 'deadline') {
					;(object as fabric.IText).set({
						text: isShowEndDate
							? 'Tidak disebutkan'
							: format(new Date(endDate), 'd MMMM yyyy'),
					})
				}
				if (object.name === 'jobType') {
					;(object as fabric.IText).set({ text: jobType })
				}
				if (object.name === 'locationType') {
					;(object as fabric.IText).set({ text: locationType })
				}
				if (object.name === 'col1Description') {
					const htmlRe = /<[^>]*>/g
					const pRe = /<\/p>/g
					const text = description.replaceAll(pRe, '\n').replaceAll(htmlRe, '')
					const lines = decodeHTML(text)
					;(object as fabric.Textbox).set({
						text: lines,
					})
				}
				if (object.name === 'howToApply') {
					const htmlRe = /<[^>]*>/g
					const text = decodeHTML(howToApply).replaceAll(htmlRe, '')

					const emailRe =
						/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
					const urlRe = /(http?:\/\/[^\s]+)/g
					const extractedUrl = text.match(urlRe)?.[0]
					const extractedEmail = emailRe.exec(text)?.[0]

					;(object as fabric.IText).set({
						text: extractedEmail || extractedUrl || text,
					})
				}
			})

			fc.current.renderAll()
		}
	}, [result.data?.findJobs, fc.current])

	return (
		<div id='react'>
			<div onClick={() => imageUploader.current.click()}>
				<input
					type='file'
					accept='image/*'
					onChange={handleImageUpload}
					ref={imageUploader}
					style={{
						display: 'none',
					}}
				/>
				<img ref={uploadedImage} height={232} width={232} />
				Click to upload Image
			</div>
			<button
				style={{
					padding: '24px 16px',
					fontSize: '24px',
				}}
				onClick={() => {
					setShow(!show)
					const base64 = fc.current.toDataURL({
						multiplier: 5,
						format: 'png',
						quality: 1,
					})
					const downloadLink = document.createElement('a')
					downloadLink.href = base64
					downloadLink.download = 'test.png'
					downloadLink.click()
					document.removeChild(downloadLink)
				}}
			>
				Download Image
			</button>
			<canvas width={1080} height={1080} ref={setRef} />
		</div>
	)
}
