import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AuthTokenTypeDto = {
  __typename?: 'AuthTokenTypeDTO';
  accessToken: Scalars['String'];
  expiresAccessToken: Scalars['Float'];
  expiresRefreshToken: Scalars['Float'];
  refreshToken: Scalars['String'];
};

export type CreateEducationRequestDto = {
  activities?: InputMaybe<Scalars['String']>;
  degree?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endYear?: InputMaybe<Scalars['Int']>;
  fieldStudy?: InputMaybe<Scalars['String']>;
  gpa?: InputMaybe<Scalars['Float']>;
  institution: Scalars['String'];
  isStudyHere?: InputMaybe<Scalars['Boolean']>;
  region?: InputMaybe<Scalars['String']>;
  startYear: Scalars['Int'];
};

export type CreateExperiencePositionsRequestDto = {
  description?: InputMaybe<Scalars['String']>;
  fromDate: Scalars['DateTime'];
  isWorkHere?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  toDate?: InputMaybe<Scalars['DateTime']>;
};

export type CreateExperienceRequestDto = {
  companyName: Scalars['String'];
  positions: Array<CreateExperiencePositionsRequestDto>;
  region?: InputMaybe<Scalars['String']>;
};

export type CreateJobsRequestDto = {
  benefit?: InputMaybe<Scalars['String']>;
  companyName: Scalars['String'];
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  endSalary?: InputMaybe<Scalars['String']>;
  howToApply?: InputMaybe<Scalars['String']>;
  intervalSalary?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isApprove: Scalars['String'];
  isApproveRemark?: InputMaybe<Scalars['String']>;
  isFeature?: InputMaybe<Scalars['Boolean']>;
  isShowEndDate?: InputMaybe<Scalars['Boolean']>;
  isShowSalary?: InputMaybe<Scalars['Boolean']>;
  jobAddress?: InputMaybe<Scalars['String']>;
  jobCountry?: InputMaybe<Scalars['String']>;
  jobLocationType: Scalars['String'];
  jobProvince?: InputMaybe<Scalars['String']>;
  position: Scalars['String'];
  requirements?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<Scalars['String']>>;
  source: Scalars['String'];
  sourceID?: InputMaybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
  startSalary?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type: Scalars['String'];
};

export type CreateSkillsRequestDto = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  isPredefined?: InputMaybe<Scalars['Boolean']>;
  msSkillGroups?: InputMaybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
};

export type CrmCreateUserDataRequestDto = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  username: Scalars['String'];
};

export type CrmCustomers = {
  __typename?: 'CrmCustomers';
  _id: Scalars['String'];
  about?: Maybe<Scalars['String']>;
  availability: CustomerAvailability;
  availabilityNotes?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<MsCountries>;
  cover?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currentRole?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  isConfirm: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  links: Array<CustomerLinks>;
  openTo: Array<MsOpenTos>;
  region?: Maybe<Scalars['String']>;
  services: Array<Scalars['String']>;
  settings: CustomerSettings;
  skills: Array<CustomerSkills>;
  thumbnail?: Maybe<Scalars['String']>;
  tools: Array<CustomerTools>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type CrmDeleteUserDataRequestDto = {
  id: Scalars['String'];
};

export type CrmFindUserDataRequestDto = {
  id: Scalars['String'];
};

export type CrmListUserDataRequestDto = {
  email?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Float']>;
  username?: InputMaybe<Scalars['String']>;
};

export type CrmListUserDataResponseDto = {
  __typename?: 'CrmListUserDataResponseDTO';
  docs: Array<Users>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type CrmMsSkills = {
  __typename?: 'CrmMsSkills';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  isPredefined: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CrmUpdateUserDataRequestDto = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  passwordConfirmation?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type CustomerAvailability = {
  __typename?: 'CustomerAvailability';
  availableDate?: Maybe<Scalars['DateTime']>;
  immediate: Scalars['Boolean'];
};

export type CustomerEducations = {
  __typename?: 'CustomerEducations';
  _id: Scalars['String'];
  activities?: Maybe<Scalars['String']>;
  degree?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endYear: Scalars['Int'];
  fieldStudy?: Maybe<Scalars['String']>;
  gpa?: Maybe<Scalars['String']>;
  institution: Scalars['String'];
  isStudyHere: Scalars['Boolean'];
  region?: Maybe<Scalars['String']>;
  startYear: Scalars['Int'];
};

export type CustomerExperiencePositions = {
  __typename?: 'CustomerExperiencePositions';
  description?: Maybe<Scalars['String']>;
  fromDate: Scalars['DateTime'];
  isWorkHere: Scalars['Boolean'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
  toDate?: Maybe<Scalars['DateTime']>;
};

export type CustomerExperiences = {
  __typename?: 'CustomerExperiences';
  _id: Scalars['String'];
  companyName: Scalars['String'];
  order: Scalars['Int'];
  positions: Array<CustomerExperiencePositions>;
  region?: Maybe<Scalars['String']>;
};

export type CustomerLinks = {
  __typename?: 'CustomerLinks';
  link: MsLinks;
  value: Scalars['String'];
};

export type CustomerPortfolioMedias = {
  __typename?: 'CustomerPortfolioMedias';
  isCover: Scalars['Boolean'];
  mediaType: Scalars['String'];
  order: Scalars['Int'];
  url: Scalars['String'];
};

export type CustomerPortfolioMetas = {
  __typename?: 'CustomerPortfolioMetas';
  downvote: Scalars['Int'];
  upvote: Scalars['Int'];
};

export type CustomerPortfolios = {
  __typename?: 'CustomerPortfolios';
  _id: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  contentJSON?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customer: Customers;
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  medias: Array<CustomerPortfolioMedias>;
  meta: CustomerPortfolioMetas;
  order: Scalars['Int'];
  slug: Scalars['String'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CustomerSettings = {
  __typename?: 'CustomerSettings';
  activeHoursEnd: Scalars['String'];
  activeHoursStart: Scalars['String'];
  showServices: Scalars['Boolean'];
  showSkills: Scalars['Boolean'];
};

export type CustomerSkills = {
  __typename?: 'CustomerSkills';
  name: Scalars['String'];
};

export type CustomerTools = {
  __typename?: 'CustomerTools';
  tool: MsTools;
  value: Scalars['String'];
};

export type Customers = {
  __typename?: 'Customers';
  _id: Scalars['String'];
  about?: Maybe<Scalars['String']>;
  availability: CustomerAvailability;
  availabilityNotes?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<MsCountries>;
  cover?: Maybe<Scalars['String']>;
  currentRole?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  isConfirm: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  links: Array<CustomerLinks>;
  openTo: Array<MsOpenTos>;
  region?: Maybe<Scalars['String']>;
  services: Array<Scalars['String']>;
  settings: CustomerSettings;
  skills: Array<CustomerSkills>;
  thumbnail?: Maybe<Scalars['String']>;
  tools: Array<CustomerTools>;
  username: Scalars['String'];
};

export type DeleteEducationRequestDto = {
  id: Scalars['String'];
};

export type DeleteExperienceRequestDto = {
  id: Scalars['String'];
};

export type DeleteJobScrapeRequestDto = {
  id: Scalars['String'];
};

export type DeleteJobScrapeResponseDto = {
  __typename?: 'DeleteJobScrapeResponseDTO';
  id: Scalars['String'];
};

export type DeleteJobsRequestDto = {
  id: Scalars['String'];
};

export type DeleteJobsResponseDto = {
  __typename?: 'DeleteJobsResponseDTO';
  id: Scalars['String'];
};

export type DeletePortfolioRequestDto = {
  id: Scalars['String'];
};

export type DeleteSkillsRequestDto = {
  id: Scalars['String'];
};

export type DeleteSkillsResponseDto = {
  __typename?: 'DeleteSkillsResponseDTO';
  id: Scalars['String'];
};

export type FetchLocationsRequestDto = {
  keyword?: InputMaybe<Scalars['String']>;
};

export type FetchProvincesRequestDto = {
  countryID: Scalars['String'];
};

export type FetchSkillsRequestDto = {
  isPredefined?: InputMaybe<Scalars['Boolean']>;
  keyword?: InputMaybe<Scalars['String']>;
};

export type FetchTagsRequestDto = {
  isPredefined?: InputMaybe<Scalars['Boolean']>;
  keyword?: InputMaybe<Scalars['String']>;
};

export type FetchTagsResponseDto = {
  __typename?: 'FetchTagsResponseDTO';
  docs: Array<Tags>;
  total: Scalars['Int'];
};

export type FindCustomerRequestDto = {
  id: Scalars['String'];
};

export type FindEducationRequestDto = {
  id: Scalars['String'];
};

export type FindExperienceRequestDto = {
  id: Scalars['String'];
};

export type FindJobScrapeRequestDto = {
  id: Scalars['String'];
};

export type FindJobsRequestDto = {
  id: Scalars['String'];
};

export type FindPortfolioRequestDto = {
  id: Scalars['String'];
};

export type FindSkillsRequestDto = {
  id: Scalars['String'];
};

export type ForgotPasswordRequestDto = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  token: Scalars['String'];
};

export type JobScrapes = {
  __typename?: 'JobScrapes';
  _id: Scalars['String'];
  benefit?: Maybe<Scalars['String']>;
  companyName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  howToApply?: Maybe<Scalars['String']>;
  isProcessed: Scalars['Boolean'];
  location?: Maybe<JobScrapesLocation>;
  position: Scalars['String'];
  requirements?: Maybe<Scalars['String']>;
  salary: JobsSalary;
  site: Scalars['String'];
  siteUrl: Scalars['String'];
  skills: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type JobScrapesLocation = {
  __typename?: 'JobScrapesLocation';
  address?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Jobs = {
  __typename?: 'Jobs';
  _id: Scalars['String'];
  analytic: JobsAnalytic;
  benefit?: Maybe<Scalars['String']>;
  companyName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  howToApply?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  isApprove: Scalars['String'];
  isApproveRemark?: Maybe<Scalars['String']>;
  isFeature: Scalars['Boolean'];
  isShowEndDate: Scalars['Boolean'];
  location: JobsLocation;
  position: Scalars['String'];
  requirements?: Maybe<Scalars['String']>;
  salary: JobsSalary;
  skills: Array<Scalars['String']>;
  slug: Scalars['String'];
  source: JobsSource;
  startDate: Scalars['DateTime'];
  tags: Array<Scalars['String']>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type JobsAnalytic = {
  __typename?: 'JobsAnalytic';
  click: Scalars['Int'];
  view: Scalars['Int'];
};

export type JobsLocation = {
  __typename?: 'JobsLocation';
  address?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type JobsSalary = {
  __typename?: 'JobsSalary';
  currency?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['Int']>;
  interval?: Maybe<Scalars['String']>;
  isShowSalary: Scalars['Boolean'];
  start?: Maybe<Scalars['Int']>;
};

export type JobsSource = {
  __typename?: 'JobsSource';
  sourceCustomer?: Maybe<CrmCustomers>;
  sourceID?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type ListCustomerRequestDto = {
  company?: InputMaybe<Scalars['String']>;
  currentRole?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isConfirm?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
  services?: InputMaybe<Array<Scalars['String']>>;
  skills?: InputMaybe<Array<Scalars['String']>>;
  username?: InputMaybe<Scalars['String']>;
};

export type ListCustomerResponseDto = {
  __typename?: 'ListCustomerResponseDTO';
  docs: Array<CrmCustomers>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ListEducationsRequestDto = {
  isFetchAll?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type ListEducationsResponseDto = {
  __typename?: 'ListEducationsResponseDTO';
  docs: Array<CustomerEducations>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ListExperiencesRequestDto = {
  isFetchAll?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type ListExperiencesResponseDto = {
  __typename?: 'ListExperiencesResponseDTO';
  docs: Array<CustomerExperiences>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ListJobScrapeRequestDto = {
  company?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
  position?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Scalars['String']>;
  siteUrl?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<Scalars['String']>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
};

export type ListJobScrapeResponseDto = {
  __typename?: 'ListJobScrapeResponseDTO';
  docs: Array<JobScrapes>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ListJobsRequestDto = {
  company?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isApprove?: InputMaybe<Scalars['String']>;
  isFeature?: InputMaybe<Scalars['Boolean']>;
  locationSearch?: InputMaybe<Scalars['String']>;
  locationType?: InputMaybe<Array<Scalars['String']>>;
  page?: InputMaybe<Scalars['Float']>;
  position?: InputMaybe<Scalars['String']>;
  salaryCurrency?: InputMaybe<Scalars['String']>;
  salaryEnd?: InputMaybe<Scalars['String']>;
  salaryStart?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<Scalars['String']>>;
  source?: InputMaybe<Array<Scalars['String']>>;
  sourceID?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
};

export type ListJobsResponseDto = {
  __typename?: 'ListJobsResponseDTO';
  docs: Array<Jobs>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ListPortfoliosRequestDto = {
  isFetchAll?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type ListPortfoliosResponseDto = {
  __typename?: 'ListPortfoliosResponseDTO';
  docs: Array<CustomerPortfolios>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ListSkillsRequestDto = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  isPredefined?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
};

export type ListSkillsResponseDto = {
  __typename?: 'ListSkillsResponseDTO';
  docs: Array<CrmMsSkills>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type LoginResponseDto = {
  __typename?: 'LoginResponseDTO';
  message: Scalars['String'];
  token: AuthTokenTypeDto;
};

export type LogoutRequestDto = {
  refreshToken?: InputMaybe<Scalars['String']>;
};

export type MainCreateJobsRequestDto = {
  benefit?: InputMaybe<Scalars['String']>;
  companyName: Scalars['String'];
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  endSalary?: InputMaybe<Scalars['String']>;
  howToApply?: InputMaybe<Scalars['String']>;
  intervalSalary?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isShowEndDate?: InputMaybe<Scalars['Boolean']>;
  isShowSalary?: InputMaybe<Scalars['Boolean']>;
  jobAddress?: InputMaybe<Scalars['String']>;
  jobCountry?: InputMaybe<Scalars['String']>;
  jobLocationType: Scalars['String'];
  jobProvince?: InputMaybe<Scalars['String']>;
  position: Scalars['String'];
  requirements?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<Scalars['String']>>;
  startDate: Scalars['DateTime'];
  startSalary?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type: Scalars['String'];
};

export type MainDeleteCustomerJobsRequestDto = {
  id: Scalars['String'];
};

export type MainFindJobsRequestDto = {
  isPreview?: InputMaybe<Scalars['Boolean']>;
  slug: Scalars['String'];
};

export type MainJobs = {
  __typename?: 'MainJobs';
  _id: Scalars['String'];
  benefit?: Maybe<Scalars['String']>;
  companyName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  howToApply?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  isApprove: Scalars['String'];
  isApproveUpdateDate: Scalars['DateTime'];
  isBookmark: Scalars['Boolean'];
  isShowEndDate: Scalars['Boolean'];
  location: JobsLocation;
  position: Scalars['String'];
  requirements?: Maybe<Scalars['String']>;
  salary: JobsSalary;
  skills: Array<Scalars['String']>;
  slug: Scalars['String'];
  source: Scalars['Boolean'];
  startDate: Scalars['DateTime'];
  tags: Array<Scalars['String']>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type MainListCustomerJobsRequestDto = {
  page?: InputMaybe<Scalars['Float']>;
};

export type MainListJobsFeatureRequestDto = {
  locationSearch?: InputMaybe<Scalars['String']>;
  locationType?: InputMaybe<Array<Scalars['String']>>;
  skills?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<Scalars['String']>>;
};

export type MainListJobsRequestDto = {
  company?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['String']>;
  isApprove?: InputMaybe<Scalars['String']>;
  locationSearch?: InputMaybe<Scalars['String']>;
  locationType?: InputMaybe<Array<Scalars['String']>>;
  page?: InputMaybe<Scalars['Float']>;
  position?: InputMaybe<Scalars['String']>;
  salaryCurrency?: InputMaybe<Scalars['String']>;
  salaryEnd?: InputMaybe<Scalars['String']>;
  salaryStart?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<Scalars['String']>>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortByOrder?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Array<Scalars['String']>>;
};

export type MainListJobsResponseDto = {
  __typename?: 'MainListJobsResponseDTO';
  docs: Array<MainJobs>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type MainSaveCustomerJobsRequestDto = {
  id: Scalars['String'];
};

export type MainUpdateAnalyticJobsRequestDto = {
  event: Scalars['String'];
  id: Scalars['String'];
};

export type MainUpdateJobsRequestDto = {
  benefit?: InputMaybe<Scalars['String']>;
  companyName: Scalars['String'];
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  endSalary?: InputMaybe<Scalars['String']>;
  howToApply?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  intervalSalary?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isShowEndDate?: InputMaybe<Scalars['Boolean']>;
  isShowSalary?: InputMaybe<Scalars['Boolean']>;
  jobAddress?: InputMaybe<Scalars['String']>;
  jobCountry?: InputMaybe<Scalars['String']>;
  jobLocationType: Scalars['String'];
  jobProvince?: InputMaybe<Scalars['String']>;
  position: Scalars['String'];
  requirements?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<Scalars['String']>>;
  startDate: Scalars['DateTime'];
  startSalary?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type: Scalars['String'];
};

export type MainUpdateJobsToggleIsActiveRequestDto = {
  id: Scalars['String'];
  value: Scalars['Boolean'];
};

export type MsCountries = {
  __typename?: 'MsCountries';
  _id: Scalars['String'];
  code: Scalars['String'];
  isChooseProvince: Scalars['Boolean'];
  name: Scalars['String'];
  nationality: Scalars['String'];
};

export type MsCurrencies = {
  __typename?: 'MsCurrencies';
  _id: Scalars['String'];
  code: Scalars['String'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type MsLinks = {
  __typename?: 'MsLinks';
  _id: Scalars['String'];
  isActive: Scalars['Boolean'];
  key: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['Int'];
};

export type MsOpenTos = {
  __typename?: 'MsOpenTos';
  _id: Scalars['String'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
};

export type MsTools = {
  __typename?: 'MsTools';
  _id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  UpdateJobsToggleIsActive: MainJobs;
  activateAccount: LoginResponseDto;
  checkForgotPassword: Scalars['Boolean'];
  createEducation: CustomerEducations;
  createExperience: CustomerExperiences;
  createJobs: MainJobs;
  createPortfolio: CustomerPortfolios;
  crmActivateAccount: Scalars['String'];
  crmCheckForgotPassword: Scalars['Boolean'];
  crmCreateJobs: Jobs;
  crmCreateSkills: CrmMsSkills;
  crmCreateUserData: Users;
  crmDeleteJobs: DeleteJobsResponseDto;
  crmDeleteScrapeJobs: DeleteJobScrapeResponseDto;
  crmDeleteSkills: DeleteSkillsResponseDto;
  crmDeleteUserData: Scalars['String'];
  crmForgotPassword: Scalars['Boolean'];
  crmLogin: LoginResponseDto;
  crmRefreshToken: RefreshTokenResponseDto;
  crmRemoveCache: Scalars['Boolean'];
  crmUpdateCustomer: CrmCustomers;
  crmUpdateForgotPassword: Scalars['String'];
  crmUpdateJobs: Jobs;
  crmUpdatePassword: Scalars['Boolean'];
  crmUpdateProfile: Scalars['Boolean'];
  crmUpdateSkills: CrmMsSkills;
  crmUpdateUserData: Users;
  deleteEducation: Scalars['Boolean'];
  deleteExperience: Scalars['Boolean'];
  deleteJobs: DeleteJobsResponseDto;
  deletePortfolio: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login: LoginResponseDto;
  portfolioDetailVote: Scalars['Boolean'];
  refreshToken: RefreshTokenResponseDto;
  register: Scalars['Boolean'];
  sortExperiences: Scalars['Boolean'];
  sortPortfolios: Scalars['Boolean'];
  updateAnalyticJobs: Scalars['Boolean'];
  updateEducation: CustomerEducations;
  updateExperience: CustomerExperiences;
  updateForgotPassword: Scalars['String'];
  updateJobs: MainJobs;
  updatePassword: Scalars['Boolean'];
  updatePortfolio: CustomerPortfolios;
  updateProfile: Scalars['Boolean'];
  updateProfileAvailability: Scalars['Boolean'];
  updateProfileCover: Scalars['String'];
  updateProfileImage: Scalars['String'];
  updateProfileSkills: Scalars['Boolean'];
  updateProfileTools: Array<CustomerTools>;
  updateUsername: Scalars['Boolean'];
};


export type MutationUpdateJobsToggleIsActiveArgs = {
  input: MainUpdateJobsToggleIsActiveRequestDto;
};


export type MutationActivateAccountArgs = {
  token: Scalars['String'];
};


export type MutationCheckForgotPasswordArgs = {
  token: Scalars['String'];
};


export type MutationCreateEducationArgs = {
  input: CreateEducationRequestDto;
};


export type MutationCreateExperienceArgs = {
  input: CreateExperienceRequestDto;
};


export type MutationCreateJobsArgs = {
  input: MainCreateJobsRequestDto;
};


export type MutationCrmActivateAccountArgs = {
  token: Scalars['String'];
};


export type MutationCrmCheckForgotPasswordArgs = {
  token: Scalars['String'];
};


export type MutationCrmCreateJobsArgs = {
  input: CreateJobsRequestDto;
};


export type MutationCrmCreateSkillsArgs = {
  input: CreateSkillsRequestDto;
};


export type MutationCrmCreateUserDataArgs = {
  input: CrmCreateUserDataRequestDto;
};


export type MutationCrmDeleteJobsArgs = {
  input: DeleteJobsRequestDto;
};


export type MutationCrmDeleteScrapeJobsArgs = {
  input: DeleteJobScrapeRequestDto;
};


export type MutationCrmDeleteSkillsArgs = {
  input: DeleteSkillsRequestDto;
};


export type MutationCrmDeleteUserDataArgs = {
  input: CrmDeleteUserDataRequestDto;
};


export type MutationCrmForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationCrmLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCrmRefreshTokenArgs = {
  token: Scalars['String'];
};


export type MutationCrmRemoveCacheArgs = {
  input: RemoveCacheRequestDto;
};


export type MutationCrmUpdateCustomerArgs = {
  input: UpdateCustomerRequestDto;
};


export type MutationCrmUpdateForgotPasswordArgs = {
  input: ForgotPasswordRequestDto;
};


export type MutationCrmUpdateJobsArgs = {
  input: UpdateJobsRequestDto;
};


export type MutationCrmUpdatePasswordArgs = {
  input: UpdatePasswordRequestDto;
};


export type MutationCrmUpdateProfileArgs = {
  input: UpdateProfileRequestDto;
};


export type MutationCrmUpdateSkillsArgs = {
  input: UpdateSkillsRequestDto;
};


export type MutationCrmUpdateUserDataArgs = {
  input: CrmUpdateUserDataRequestDto;
};


export type MutationDeleteEducationArgs = {
  input: DeleteEducationRequestDto;
};


export type MutationDeleteExperienceArgs = {
  input: DeleteExperienceRequestDto;
};


export type MutationDeleteJobsArgs = {
  input: DeleteJobsRequestDto;
};


export type MutationDeletePortfolioArgs = {
  input: DeletePortfolioRequestDto;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationPortfolioDetailVoteArgs = {
  input: PortfolioDetailVoteRequestDto;
};


export type MutationRefreshTokenArgs = {
  token: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: RegisterRequestDto;
};


export type MutationSortExperiencesArgs = {
  input: SortExperiencesRequestDto;
};


export type MutationSortPortfoliosArgs = {
  input: SortPortfoliosRequestDto;
};


export type MutationUpdateAnalyticJobsArgs = {
  input: MainUpdateAnalyticJobsRequestDto;
};


export type MutationUpdateEducationArgs = {
  input: UpdateEducationRequestDto;
};


export type MutationUpdateExperienceArgs = {
  input: UpdateExperienceRequestDto;
};


export type MutationUpdateForgotPasswordArgs = {
  input: ForgotPasswordRequestDto;
};


export type MutationUpdateJobsArgs = {
  input: MainUpdateJobsRequestDto;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordRequestDto;
};


export type MutationUpdatePortfolioArgs = {
  input: UpdatePortfolioRequestDto;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileRequestDto;
};


export type MutationUpdateProfileAvailabilityArgs = {
  input: UpdateProfileAvailabilityRequestDto;
};


export type MutationUpdateProfileCoverArgs = {
  input: UpdateProfileCoverRequestDto;
};


export type MutationUpdateProfileImageArgs = {
  input: UpdateProfileImageRequestDto;
};


export type MutationUpdateProfileSkillsArgs = {
  input: UpdateProfileSkillsRequestDto;
};


export type MutationUpdateProfileToolsArgs = {
  input: UpdateProfileToolsRequestDto;
};


export type MutationUpdateUsernameArgs = {
  input: UpdateUsernameRequestDto;
};

export type PortfolioDetailRequestDto = {
  slug: Scalars['String'];
};

export type PortfolioDetailVoteRequestDto = {
  slug: Scalars['String'];
  type: Scalars['String'];
};

export type PortfolioListRequestDto = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  tags: Array<Scalars['String']>;
};

export type PortfolioListResponseDto = {
  __typename?: 'PortfolioListResponseDTO';
  docs: Array<CustomerPortfolios>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  authDetails: Customers;
  crmAuthDetails: Users;
  crmFindCustomer: CrmCustomers;
  crmFindJobs: Jobs;
  crmFindScrapeJobs: JobScrapes;
  crmFindSkills: CrmMsSkills;
  crmFindUserData: Users;
  crmHealthCheck: Scalars['String'];
  crmListCustomer: ListCustomerResponseDto;
  crmListJobs: ListJobsResponseDto;
  crmListScrapeJobs: ListJobScrapeResponseDto;
  crmListSkills: ListSkillsResponseDto;
  crmListUserData: CrmListUserDataResponseDto;
  crmLogout: Scalars['Boolean'];
  crmSettings?: Maybe<Settings>;
  deleteCustomerJobs: Scalars['Boolean'];
  fetchCountries: Array<MsCountries>;
  fetchCurrencies: Array<MsCurrencies>;
  fetchLinks: Array<MsLinks>;
  fetchLocations: Array<Scalars['String']>;
  fetchOpenTos: Array<MsOpenTos>;
  fetchProvinces: Array<MsCountries>;
  fetchServices: Array<Scalars['String']>;
  fetchSkills: Array<Scalars['String']>;
  fetchSlideShows: Array<SlideShows>;
  fetchTags: FetchTagsResponseDto;
  fetchTools: Array<MsTools>;
  findEducation: CustomerEducations;
  findExperience: CustomerExperiences;
  findJobs: MainJobs;
  findPortfolio: CustomerPortfolios;
  healthCheck: Scalars['String'];
  listCustomerJobs: MainListJobsResponseDto;
  listEditableJobs: MainListJobsResponseDto;
  listEducations: ListEducationsResponseDto;
  listExperiences: ListExperiencesResponseDto;
  listJobs: MainListJobsResponseDto;
  listJobsFeature: Array<MainJobs>;
  listPortfolios: ListPortfoliosResponseDto;
  logout: Scalars['Boolean'];
  portfolioDetail: CustomerPortfolios;
  portfolioList: PortfolioListResponseDto;
  saveCustomerJobs: Scalars['Boolean'];
  settings?: Maybe<Settings>;
  userDetail: Customers;
  userDetailEducations: UserDetailEducationsResponseDto;
  userDetailExperiences: UserDetailExperiencesResponseDto;
  userDetailPortfolioTags: Array<UserDetailPortfolioTagsResponseDto>;
  userDetailPortfolios: UserDetailPortfoliosResponseDto;
};


export type QueryCrmFindCustomerArgs = {
  input: FindCustomerRequestDto;
};


export type QueryCrmFindJobsArgs = {
  input: FindJobsRequestDto;
};


export type QueryCrmFindScrapeJobsArgs = {
  input: FindJobScrapeRequestDto;
};


export type QueryCrmFindSkillsArgs = {
  input: FindSkillsRequestDto;
};


export type QueryCrmFindUserDataArgs = {
  input: CrmFindUserDataRequestDto;
};


export type QueryCrmListCustomerArgs = {
  input: ListCustomerRequestDto;
};


export type QueryCrmListJobsArgs = {
  input: ListJobsRequestDto;
};


export type QueryCrmListScrapeJobsArgs = {
  input: ListJobScrapeRequestDto;
};


export type QueryCrmListSkillsArgs = {
  input: ListSkillsRequestDto;
};


export type QueryCrmListUserDataArgs = {
  input: CrmListUserDataRequestDto;
};


export type QueryCrmLogoutArgs = {
  input: LogoutRequestDto;
};


export type QueryCrmSettingsArgs = {
  input: SettingsRequestDto;
};


export type QueryDeleteCustomerJobsArgs = {
  input: MainDeleteCustomerJobsRequestDto;
};


export type QueryFetchLocationsArgs = {
  input: FetchLocationsRequestDto;
};


export type QueryFetchProvincesArgs = {
  input: FetchProvincesRequestDto;
};


export type QueryFetchSkillsArgs = {
  input: FetchSkillsRequestDto;
};


export type QueryFetchTagsArgs = {
  input: FetchTagsRequestDto;
};


export type QueryFindEducationArgs = {
  input: FindEducationRequestDto;
};


export type QueryFindExperienceArgs = {
  input: FindExperienceRequestDto;
};


export type QueryFindJobsArgs = {
  input: MainFindJobsRequestDto;
};


export type QueryFindPortfolioArgs = {
  input: FindPortfolioRequestDto;
};


export type QueryListCustomerJobsArgs = {
  input: MainListCustomerJobsRequestDto;
};


export type QueryListEditableJobsArgs = {
  input: MainListJobsRequestDto;
};


export type QueryListEducationsArgs = {
  input: ListEducationsRequestDto;
};


export type QueryListExperiencesArgs = {
  input: ListExperiencesRequestDto;
};


export type QueryListJobsArgs = {
  input: MainListJobsRequestDto;
};


export type QueryListJobsFeatureArgs = {
  input: MainListJobsFeatureRequestDto;
};


export type QueryListPortfoliosArgs = {
  input: ListPortfoliosRequestDto;
};


export type QueryLogoutArgs = {
  input: LogoutRequestDto;
};


export type QueryPortfolioDetailArgs = {
  input: PortfolioDetailRequestDto;
};


export type QueryPortfolioListArgs = {
  input: PortfolioListRequestDto;
};


export type QuerySaveCustomerJobsArgs = {
  input: MainSaveCustomerJobsRequestDto;
};


export type QuerySettingsArgs = {
  input: SettingsRequestDto;
};


export type QueryUserDetailArgs = {
  input: UserDetailRequestDto;
};


export type QueryUserDetailEducationsArgs = {
  input: UserDetailEducationRequestDto;
};


export type QueryUserDetailExperiencesArgs = {
  input: UserDetailExperienceRequestDto;
};


export type QueryUserDetailPortfolioTagsArgs = {
  input: UserDetailPortfolioTagRequestDto;
};


export type QueryUserDetailPortfoliosArgs = {
  input: UserDetailPortfolioRequestDto;
};

export type RefreshTokenResponseDto = {
  __typename?: 'RefreshTokenResponseDTO';
  token: AuthTokenTypeDto;
};

export type RegisterRequestDto = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};

export type RemoveCacheRequestDto = {
  name: Scalars['String'];
};

export type Settings = {
  __typename?: 'Settings';
  data: Array<SettingsData>;
  name: Scalars['String'];
};

export type SettingsData = {
  __typename?: 'SettingsData';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type SettingsRequestDto = {
  name: Scalars['String'];
};

export type SlideShows = {
  __typename?: 'SlideShows';
  _id: Scalars['String'];
  image: Scalars['String'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  url?: Maybe<Scalars['String']>;
};

export type SortExperiencesRequestDto = {
  id: Array<Scalars['String']>;
};

export type SortPortfoliosRequestDto = {
  id: Array<Scalars['String']>;
};

export type Tags = {
  __typename?: 'Tags';
  _id: Scalars['String'];
  isPredefined: Scalars['Boolean'];
  name: Scalars['String'];
};

export type UpdateCustomerRequestDto = {
  about?: InputMaybe<Scalars['String']>;
  availabilityDate?: InputMaybe<Scalars['DateTime']>;
  availabilityImmediate?: InputMaybe<Scalars['Boolean']>;
  availabilityNotes?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  currentRole?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  isConfirm?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  showServices?: InputMaybe<Scalars['Boolean']>;
  showSkills?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateEducationRequestDto = {
  activities?: InputMaybe<Scalars['String']>;
  degree?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endYear?: InputMaybe<Scalars['Int']>;
  fieldStudy?: InputMaybe<Scalars['String']>;
  gpa?: InputMaybe<Scalars['Float']>;
  id: Scalars['String'];
  institution: Scalars['String'];
  isStudyHere?: InputMaybe<Scalars['Boolean']>;
  region?: InputMaybe<Scalars['String']>;
  startYear: Scalars['Int'];
};

export type UpdateExperienceRequestDto = {
  companyName: Scalars['String'];
  id: Scalars['String'];
  positions: Array<CreateExperiencePositionsRequestDto>;
  region?: InputMaybe<Scalars['String']>;
};

export type UpdateJobsRequestDto = {
  benefit?: InputMaybe<Scalars['String']>;
  companyName: Scalars['String'];
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  endSalary?: InputMaybe<Scalars['String']>;
  howToApply?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  intervalSalary?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isApprove: Scalars['String'];
  isApproveRemark?: InputMaybe<Scalars['String']>;
  isFeature?: InputMaybe<Scalars['Boolean']>;
  isShowEndDate?: InputMaybe<Scalars['Boolean']>;
  isShowSalary?: InputMaybe<Scalars['Boolean']>;
  jobAddress?: InputMaybe<Scalars['String']>;
  jobCountry?: InputMaybe<Scalars['String']>;
  jobLocationType: Scalars['String'];
  jobProvince?: InputMaybe<Scalars['String']>;
  position: Scalars['String'];
  requirements?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<Scalars['String']>>;
  source?: InputMaybe<Scalars['String']>;
  sourceID?: InputMaybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
  startSalary?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type: Scalars['String'];
};

export type UpdatePasswordRequestDto = {
  oldPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type UpdatePortfolioMediaRequestDto = {
  isCover: Scalars['Boolean'];
  mediaType: Scalars['String'];
  order: Scalars['Int'];
  url: Scalars['String'];
};

export type UpdatePortfolioRequestDto = {
  content?: InputMaybe<Scalars['String']>;
  contentJSON?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  medias?: InputMaybe<Array<UpdatePortfolioMediaRequestDto>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type UpdateProfileAvailabilityRequestDto = {
  availabilityDate?: InputMaybe<Scalars['DateTime']>;
  availabilityImmediate?: InputMaybe<Scalars['Boolean']>;
  availabilityNotes?: InputMaybe<Scalars['String']>;
  openTo?: InputMaybe<Array<Scalars['String']>>;
  services?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateProfileCoverRequestDto = {
  value?: InputMaybe<Scalars['String']>;
};

export type UpdateProfileImageRequestDto = {
  value?: InputMaybe<Scalars['String']>;
};

export type UpdateProfileLinksRequestDto = {
  link: Scalars['String'];
  value: Scalars['String'];
};

export type UpdateProfileRequestDto = {
  about?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  currentRole?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Array<UpdateProfileLinksRequestDto>>;
  region?: InputMaybe<Scalars['String']>;
  showServices?: InputMaybe<Scalars['Boolean']>;
  showSkills?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateProfileSkillsRequestDto = {
  skills?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateProfileToolsDto = {
  tool: Scalars['String'];
  value: Scalars['String'];
};

export type UpdateProfileToolsRequestDto = {
  tools?: InputMaybe<Array<UpdateProfileToolsDto>>;
};

export type UpdateSkillsRequestDto = {
  id: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  isPredefined?: InputMaybe<Scalars['Boolean']>;
  msSkillGroups?: InputMaybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
};

export type UpdateUsernameRequestDto = {
  username: Scalars['String'];
};

export type UserDetailEducationRequestDto = {
  customer: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};

export type UserDetailEducationsResponseDto = {
  __typename?: 'UserDetailEducationsResponseDTO';
  docs: Array<CustomerEducations>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type UserDetailExperienceRequestDto = {
  customer: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};

export type UserDetailExperiencesResponseDto = {
  __typename?: 'UserDetailExperiencesResponseDTO';
  docs: Array<CustomerExperiences>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type UserDetailPortfolioRequestDto = {
  customer: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type UserDetailPortfolioTagRequestDto = {
  customer: Scalars['String'];
};

export type UserDetailPortfolioTagsResponseDto = {
  __typename?: 'UserDetailPortfolioTagsResponseDTO';
  name: Scalars['String'];
  total: Scalars['Int'];
};

export type UserDetailPortfoliosResponseDto = {
  __typename?: 'UserDetailPortfoliosResponseDTO';
  docs: Array<CustomerPortfolios>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type UserDetailRequestDto = {
  id: Scalars['String'];
};

export type Users = {
  __typename?: 'Users';
  _id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  isActive: Scalars['Boolean'];
  isConfirm: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type FindJobsQueryVariables = Exact<{
  input: MainFindJobsRequestDto;
}>;


export type FindJobsQuery = { __typename?: 'Query', findJobs: { __typename?: 'MainJobs', _id: string, position: string, type: string, companyName: string, description?: string | null, howToApply?: string | null, startDate: any, endDate: any, isShowEndDate: boolean, location: { __typename?: 'JobsLocation', type: string } } };

export type JobDetailsFragment = { __typename?: 'MainJobs', _id: string, position: string, type: string, companyName: string, description?: string | null, howToApply?: string | null, startDate: any, endDate: any, isShowEndDate: boolean, location: { __typename?: 'JobsLocation', type: string } };

export const JobDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"JobDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MainJobs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"howToApply"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"isShowEndDate"}}]}}]} as unknown as DocumentNode<JobDetailsFragment, unknown>;
export const FindJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findJobs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MainFindJobsRequestDTO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findJobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"JobDetails"}}]}}]}},...JobDetailsFragmentDoc.definitions]} as unknown as DocumentNode<FindJobsQuery, FindJobsQueryVariables>;