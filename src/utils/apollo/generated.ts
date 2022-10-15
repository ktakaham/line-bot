import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** 教会管理ユーザー */
export type ChurchOwner = {
  __typename?: 'ChurchOwner';
  churchId: Scalars['String'];
  churchOwnerId: Scalars['String'];
  churchOwnerName: Scalars['String'];
};

/** aggregated selection of "church_owner" */
export type ChurchOwnerAggregate = {
  __typename?: 'ChurchOwnerAggregate';
  aggregate?: Maybe<ChurchOwnerAggregateFields>;
  nodes: Array<ChurchOwner>;
};

/** aggregate fields of "church_owner" */
export type ChurchOwnerAggregateFields = {
  __typename?: 'ChurchOwnerAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<ChurchOwnerMaxFields>;
  min?: Maybe<ChurchOwnerMinFields>;
};


/** aggregate fields of "church_owner" */
export type ChurchOwnerAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ChurchOwnerSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "church_owner". All fields are combined with a logical 'AND'. */
export type ChurchOwnerBoolExp = {
  _and?: InputMaybe<Array<ChurchOwnerBoolExp>>;
  _not?: InputMaybe<ChurchOwnerBoolExp>;
  _or?: InputMaybe<Array<ChurchOwnerBoolExp>>;
  churchId?: InputMaybe<StringComparisonExp>;
  churchOwnerId?: InputMaybe<StringComparisonExp>;
  churchOwnerName?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "church_owner" */
export enum ChurchOwnerConstraint {
  /** unique or primary key constraint on columns "church_owner_id" */
  CHURCH_OWNER_PKEY = 'church_owner_pkey'
}

/** input type for inserting data into table "church_owner" */
export type ChurchOwnerInsertInput = {
  churchId?: InputMaybe<Scalars['String']>;
  churchOwnerId?: InputMaybe<Scalars['String']>;
  churchOwnerName?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ChurchOwnerMaxFields = {
  __typename?: 'ChurchOwnerMaxFields';
  churchId?: Maybe<Scalars['String']>;
  churchOwnerId?: Maybe<Scalars['String']>;
  churchOwnerName?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ChurchOwnerMinFields = {
  __typename?: 'ChurchOwnerMinFields';
  churchId?: Maybe<Scalars['String']>;
  churchOwnerId?: Maybe<Scalars['String']>;
  churchOwnerName?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "church_owner" */
export type ChurchOwnerMutationResponse = {
  __typename?: 'ChurchOwnerMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ChurchOwner>;
};

/** on_conflict condition type for table "church_owner" */
export type ChurchOwnerOnConflict = {
  constraint: ChurchOwnerConstraint;
  update_columns?: Array<ChurchOwnerUpdateColumn>;
  where?: InputMaybe<ChurchOwnerBoolExp>;
};

/** Ordering options when selecting data from "church_owner". */
export type ChurchOwnerOrderBy = {
  churchId?: InputMaybe<OrderBy>;
  churchOwnerId?: InputMaybe<OrderBy>;
  churchOwnerName?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: church_owner */
export type ChurchOwnerPkColumnsInput = {
  churchOwnerId: Scalars['String'];
};

/** select columns of table "church_owner" */
export enum ChurchOwnerSelectColumn {
  /** column name */
  CHURCHID = 'churchId',
  /** column name */
  CHURCHOWNERID = 'churchOwnerId',
  /** column name */
  CHURCHOWNERNAME = 'churchOwnerName'
}

/** input type for updating data in table "church_owner" */
export type ChurchOwnerSetInput = {
  churchId?: InputMaybe<Scalars['String']>;
  churchOwnerId?: InputMaybe<Scalars['String']>;
  churchOwnerName?: InputMaybe<Scalars['String']>;
};

/** update columns of table "church_owner" */
export enum ChurchOwnerUpdateColumn {
  /** column name */
  CHURCHID = 'churchId',
  /** column name */
  CHURCHOWNERID = 'churchOwnerId',
  /** column name */
  CHURCHOWNERNAME = 'churchOwnerName'
}

export type ChurchOwnerUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ChurchOwnerSetInput>;
  where: ChurchOwnerBoolExp;
};

/** 教会管理テーブル */
export type Churchs = {
  __typename?: 'Churchs';
  churchId: Scalars['String'];
  churchName: Scalars['String'];
  churchOwnerId: Scalars['String'];
  deleteDate?: Maybe<Scalars['timestamptz']>;
  insertDate: Scalars['timestamptz'];
  updateDate?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "churchs" */
export type ChurchsAggregate = {
  __typename?: 'ChurchsAggregate';
  aggregate?: Maybe<ChurchsAggregateFields>;
  nodes: Array<Churchs>;
};

/** aggregate fields of "churchs" */
export type ChurchsAggregateFields = {
  __typename?: 'ChurchsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<ChurchsMaxFields>;
  min?: Maybe<ChurchsMinFields>;
};


/** aggregate fields of "churchs" */
export type ChurchsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ChurchsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "churchs". All fields are combined with a logical 'AND'. */
export type ChurchsBoolExp = {
  _and?: InputMaybe<Array<ChurchsBoolExp>>;
  _not?: InputMaybe<ChurchsBoolExp>;
  _or?: InputMaybe<Array<ChurchsBoolExp>>;
  churchId?: InputMaybe<StringComparisonExp>;
  churchName?: InputMaybe<StringComparisonExp>;
  churchOwnerId?: InputMaybe<StringComparisonExp>;
  deleteDate?: InputMaybe<TimestamptzComparisonExp>;
  insertDate?: InputMaybe<TimestamptzComparisonExp>;
  updateDate?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "churchs" */
export enum ChurchsConstraint {
  /** unique or primary key constraint on columns "church_id" */
  CHURCHS_PKEY = 'churchs_pkey'
}

/** input type for inserting data into table "churchs" */
export type ChurchsInsertInput = {
  churchId?: InputMaybe<Scalars['String']>;
  churchName?: InputMaybe<Scalars['String']>;
  churchOwnerId?: InputMaybe<Scalars['String']>;
  deleteDate?: InputMaybe<Scalars['timestamptz']>;
  insertDate?: InputMaybe<Scalars['timestamptz']>;
  updateDate?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ChurchsMaxFields = {
  __typename?: 'ChurchsMaxFields';
  churchId?: Maybe<Scalars['String']>;
  churchName?: Maybe<Scalars['String']>;
  churchOwnerId?: Maybe<Scalars['String']>;
  deleteDate?: Maybe<Scalars['timestamptz']>;
  insertDate?: Maybe<Scalars['timestamptz']>;
  updateDate?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type ChurchsMinFields = {
  __typename?: 'ChurchsMinFields';
  churchId?: Maybe<Scalars['String']>;
  churchName?: Maybe<Scalars['String']>;
  churchOwnerId?: Maybe<Scalars['String']>;
  deleteDate?: Maybe<Scalars['timestamptz']>;
  insertDate?: Maybe<Scalars['timestamptz']>;
  updateDate?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "churchs" */
export type ChurchsMutationResponse = {
  __typename?: 'ChurchsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Churchs>;
};

/** on_conflict condition type for table "churchs" */
export type ChurchsOnConflict = {
  constraint: ChurchsConstraint;
  update_columns?: Array<ChurchsUpdateColumn>;
  where?: InputMaybe<ChurchsBoolExp>;
};

/** Ordering options when selecting data from "churchs". */
export type ChurchsOrderBy = {
  churchId?: InputMaybe<OrderBy>;
  churchName?: InputMaybe<OrderBy>;
  churchOwnerId?: InputMaybe<OrderBy>;
  deleteDate?: InputMaybe<OrderBy>;
  insertDate?: InputMaybe<OrderBy>;
  updateDate?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: churchs */
export type ChurchsPkColumnsInput = {
  churchId: Scalars['String'];
};

/** select columns of table "churchs" */
export enum ChurchsSelectColumn {
  /** column name */
  CHURCHID = 'churchId',
  /** column name */
  CHURCHNAME = 'churchName',
  /** column name */
  CHURCHOWNERID = 'churchOwnerId',
  /** column name */
  DELETEDATE = 'deleteDate',
  /** column name */
  INSERTDATE = 'insertDate',
  /** column name */
  UPDATEDATE = 'updateDate'
}

/** input type for updating data in table "churchs" */
export type ChurchsSetInput = {
  churchId?: InputMaybe<Scalars['String']>;
  churchName?: InputMaybe<Scalars['String']>;
  churchOwnerId?: InputMaybe<Scalars['String']>;
  deleteDate?: InputMaybe<Scalars['timestamptz']>;
  insertDate?: InputMaybe<Scalars['timestamptz']>;
  updateDate?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "churchs" */
export enum ChurchsUpdateColumn {
  /** column name */
  CHURCHID = 'churchId',
  /** column name */
  CHURCHNAME = 'churchName',
  /** column name */
  CHURCHOWNERID = 'churchOwnerId',
  /** column name */
  DELETEDATE = 'deleteDate',
  /** column name */
  INSERTDATE = 'insertDate',
  /** column name */
  UPDATEDATE = 'updateDate'
}

export type ChurchsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ChurchsSetInput>;
  where: ChurchsBoolExp;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  ASC = 'ASC',
  /** descending ordering of the cursor */
  DESC = 'DESC'
}

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = 'ASC',
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  DESC = 'DESC',
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DESC_NULLS_LAST = 'DESC_NULLS_LAST'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'Users';
  deleteDate?: Maybe<Scalars['timestamptz']>;
  insertDate: Scalars['timestamptz'];
  mail: Scalars['String'];
  name: Scalars['String'];
  updateDate?: Maybe<Scalars['timestamptz']>;
  userId: Scalars['String'];
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'UsersAggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'UsersAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  deleteDate?: InputMaybe<TimestamptzComparisonExp>;
  insertDate?: InputMaybe<TimestamptzComparisonExp>;
  mail?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  updateDate?: InputMaybe<TimestamptzComparisonExp>;
  userId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "user_id" */
  USERS_PKEY = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  deleteDate?: InputMaybe<Scalars['timestamptz']>;
  insertDate?: InputMaybe<Scalars['timestamptz']>;
  mail?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updateDate?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'UsersMaxFields';
  deleteDate?: Maybe<Scalars['timestamptz']>;
  insertDate?: Maybe<Scalars['timestamptz']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updateDate?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'UsersMinFields';
  deleteDate?: Maybe<Scalars['timestamptz']>;
  insertDate?: Maybe<Scalars['timestamptz']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updateDate?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'UsersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  deleteDate?: InputMaybe<OrderBy>;
  insertDate?: InputMaybe<OrderBy>;
  mail?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updateDate?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  userId: Scalars['String'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  DELETEDATE = 'deleteDate',
  /** column name */
  INSERTDATE = 'insertDate',
  /** column name */
  MAIL = 'mail',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATEDATE = 'updateDate',
  /** column name */
  USERID = 'userId'
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  deleteDate?: InputMaybe<Scalars['timestamptz']>;
  insertDate?: InputMaybe<Scalars['timestamptz']>;
  mail?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updateDate?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  DELETEDATE = 'deleteDate',
  /** column name */
  INSERTDATE = 'insertDate',
  /** column name */
  MAIL = 'mail',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATEDATE = 'updateDate',
  /** column name */
  USERID = 'userId'
}

export type UsersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};

/** Streaming cursor of the table "church_owner" */
export type ChurchOwnerStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ChurchOwnerStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ChurchOwnerStreamCursorValueInput = {
  churchId?: InputMaybe<Scalars['String']>;
  churchOwnerId?: InputMaybe<Scalars['String']>;
  churchOwnerName?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "churchs" */
export type ChurchsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ChurchsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ChurchsStreamCursorValueInput = {
  churchId?: InputMaybe<Scalars['String']>;
  churchName?: InputMaybe<Scalars['String']>;
  churchOwnerId?: InputMaybe<Scalars['String']>;
  deleteDate?: InputMaybe<Scalars['timestamptz']>;
  insertDate?: InputMaybe<Scalars['timestamptz']>;
  updateDate?: InputMaybe<Scalars['timestamptz']>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "church_owner" */
  deleteChurchOwner?: Maybe<ChurchOwnerMutationResponse>;
  /** delete single row from the table: "church_owner" */
  deleteChurchOwnerByPk?: Maybe<ChurchOwner>;
  /** delete data from the table: "churchs" */
  deleteChurchs?: Maybe<ChurchsMutationResponse>;
  /** delete single row from the table: "churchs" */
  deleteChurchsByPk?: Maybe<Churchs>;
  /** delete data from the table: "users" */
  deleteUsers?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  deleteUsersByPk?: Maybe<Users>;
  /** insert data into the table: "church_owner" */
  insertChurchOwner?: Maybe<ChurchOwnerMutationResponse>;
  /** insert a single row into the table: "church_owner" */
  insertChurchOwnerOne?: Maybe<ChurchOwner>;
  /** insert data into the table: "churchs" */
  insertChurchs?: Maybe<ChurchsMutationResponse>;
  /** insert a single row into the table: "churchs" */
  insertChurchsOne?: Maybe<Churchs>;
  /** insert data into the table: "users" */
  insertUsers?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insertUsersOne?: Maybe<Users>;
  /** update data of the table: "church_owner" */
  updateChurchOwner?: Maybe<ChurchOwnerMutationResponse>;
  /** update single row of the table: "church_owner" */
  updateChurchOwnerByPk?: Maybe<ChurchOwner>;
  /** update multiples rows of table: "church_owner" */
  updateChurchOwnerMany?: Maybe<Array<Maybe<ChurchOwnerMutationResponse>>>;
  /** update data of the table: "churchs" */
  updateChurchs?: Maybe<ChurchsMutationResponse>;
  /** update single row of the table: "churchs" */
  updateChurchsByPk?: Maybe<Churchs>;
  /** update multiples rows of table: "churchs" */
  updateChurchsMany?: Maybe<Array<Maybe<ChurchsMutationResponse>>>;
  /** update data of the table: "users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  updateUsersByPk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  updateUsersMany?: Maybe<Array<Maybe<UsersMutationResponse>>>;
};


/** mutation root */
export type MutationRootDeleteChurchOwnerArgs = {
  where: ChurchOwnerBoolExp;
};


/** mutation root */
export type MutationRootDeleteChurchOwnerByPkArgs = {
  churchOwnerId: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteChurchsArgs = {
  where: ChurchsBoolExp;
};


/** mutation root */
export type MutationRootDeleteChurchsByPkArgs = {
  churchId: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  userId: Scalars['String'];
};


/** mutation root */
export type MutationRootInsertChurchOwnerArgs = {
  objects: Array<ChurchOwnerInsertInput>;
  onConflict?: InputMaybe<ChurchOwnerOnConflict>;
};


/** mutation root */
export type MutationRootInsertChurchOwnerOneArgs = {
  object: ChurchOwnerInsertInput;
  onConflict?: InputMaybe<ChurchOwnerOnConflict>;
};


/** mutation root */
export type MutationRootInsertChurchsArgs = {
  objects: Array<ChurchsInsertInput>;
  onConflict?: InputMaybe<ChurchsOnConflict>;
};


/** mutation root */
export type MutationRootInsertChurchsOneArgs = {
  object: ChurchsInsertInput;
  onConflict?: InputMaybe<ChurchsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootUpdateChurchOwnerArgs = {
  _set?: InputMaybe<ChurchOwnerSetInput>;
  where: ChurchOwnerBoolExp;
};


/** mutation root */
export type MutationRootUpdateChurchOwnerByPkArgs = {
  _set?: InputMaybe<ChurchOwnerSetInput>;
  pk_columns: ChurchOwnerPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateChurchOwnerManyArgs = {
  updates: Array<ChurchOwnerUpdates>;
};


/** mutation root */
export type MutationRootUpdateChurchsArgs = {
  _set?: InputMaybe<ChurchsSetInput>;
  where: ChurchsBoolExp;
};


/** mutation root */
export type MutationRootUpdateChurchsByPkArgs = {
  _set?: InputMaybe<ChurchsSetInput>;
  pk_columns: ChurchsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateChurchsManyArgs = {
  updates: Array<ChurchsUpdates>;
};


/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "church_owner" */
  churchOwner: Array<ChurchOwner>;
  /** fetch aggregated fields from the table: "church_owner" */
  churchOwnerAggregate: ChurchOwnerAggregate;
  /** fetch data from the table: "church_owner" using primary key columns */
  churchOwnerByPk?: Maybe<ChurchOwner>;
  /** fetch data from the table: "churchs" */
  churchs: Array<Churchs>;
  /** fetch aggregated fields from the table: "churchs" */
  churchsAggregate: ChurchsAggregate;
  /** fetch data from the table: "churchs" using primary key columns */
  churchsByPk?: Maybe<Churchs>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
};


export type QueryRootChurchOwnerArgs = {
  distinctOn?: InputMaybe<Array<ChurchOwnerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ChurchOwnerOrderBy>>;
  where?: InputMaybe<ChurchOwnerBoolExp>;
};


export type QueryRootChurchOwnerAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChurchOwnerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ChurchOwnerOrderBy>>;
  where?: InputMaybe<ChurchOwnerBoolExp>;
};


export type QueryRootChurchOwnerByPkArgs = {
  churchOwnerId: Scalars['String'];
};


export type QueryRootChurchsArgs = {
  distinctOn?: InputMaybe<Array<ChurchsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ChurchsOrderBy>>;
  where?: InputMaybe<ChurchsBoolExp>;
};


export type QueryRootChurchsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChurchsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ChurchsOrderBy>>;
  where?: InputMaybe<ChurchsBoolExp>;
};


export type QueryRootChurchsByPkArgs = {
  churchId: Scalars['String'];
};


export type QueryRootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersByPkArgs = {
  userId: Scalars['String'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "church_owner" */
  churchOwner: Array<ChurchOwner>;
  /** fetch aggregated fields from the table: "church_owner" */
  churchOwnerAggregate: ChurchOwnerAggregate;
  /** fetch data from the table: "church_owner" using primary key columns */
  churchOwnerByPk?: Maybe<ChurchOwner>;
  /** fetch data from the table in a streaming manner : "church_owner" */
  churchOwnerStream: Array<ChurchOwner>;
  /** fetch data from the table: "churchs" */
  churchs: Array<Churchs>;
  /** fetch aggregated fields from the table: "churchs" */
  churchsAggregate: ChurchsAggregate;
  /** fetch data from the table: "churchs" using primary key columns */
  churchsByPk?: Maybe<Churchs>;
  /** fetch data from the table in a streaming manner : "churchs" */
  churchsStream: Array<Churchs>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner : "users" */
  usersStream: Array<Users>;
};


export type SubscriptionRootChurchOwnerArgs = {
  distinctOn?: InputMaybe<Array<ChurchOwnerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ChurchOwnerOrderBy>>;
  where?: InputMaybe<ChurchOwnerBoolExp>;
};


export type SubscriptionRootChurchOwnerAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChurchOwnerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ChurchOwnerOrderBy>>;
  where?: InputMaybe<ChurchOwnerBoolExp>;
};


export type SubscriptionRootChurchOwnerByPkArgs = {
  churchOwnerId: Scalars['String'];
};


export type SubscriptionRootChurchOwnerStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<ChurchOwnerStreamCursorInput>>;
  where?: InputMaybe<ChurchOwnerBoolExp>;
};


export type SubscriptionRootChurchsArgs = {
  distinctOn?: InputMaybe<Array<ChurchsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ChurchsOrderBy>>;
  where?: InputMaybe<ChurchsBoolExp>;
};


export type SubscriptionRootChurchsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChurchsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ChurchsOrderBy>>;
  where?: InputMaybe<ChurchsBoolExp>;
};


export type SubscriptionRootChurchsByPkArgs = {
  churchId: Scalars['String'];
};


export type SubscriptionRootChurchsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<ChurchsStreamCursorInput>>;
  where?: InputMaybe<ChurchsBoolExp>;
};


export type SubscriptionRootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersByPkArgs = {
  userId: Scalars['String'];
};


export type SubscriptionRootUsersStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<UsersStreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Streaming cursor of the table "users" */
export type UsersStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UsersStreamCursorValueInput = {
  deleteDate?: InputMaybe<Scalars['timestamptz']>;
  insertDate?: InputMaybe<Scalars['timestamptz']>;
  mail?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updateDate?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type ChurchOwnerByIdQueryVariables = Exact<{
  churchOwnerId: Scalars['String'];
}>;


export type ChurchOwnerByIdQuery = { __typename?: 'query_root', churchOwnerByPk?: { __typename?: 'ChurchOwner', churchId: string, churchOwnerId: string, churchOwnerName: string } | null };


export const ChurchOwnerByIdDocument = gql`
    query ChurchOwnerById($churchOwnerId: String!) {
  churchOwnerByPk(churchOwnerId: $churchOwnerId) {
    churchId
    churchOwnerId
    churchOwnerName
  }
}
    `;

/**
 * __useChurchOwnerByIdQuery__
 *
 * To run a query within a React component, call `useChurchOwnerByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useChurchOwnerByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChurchOwnerByIdQuery({
 *   variables: {
 *      churchOwnerId: // value for 'churchOwnerId'
 *   },
 * });
 */
export function useChurchOwnerByIdQuery(baseOptions: Apollo.QueryHookOptions<ChurchOwnerByIdQuery, ChurchOwnerByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChurchOwnerByIdQuery, ChurchOwnerByIdQueryVariables>(ChurchOwnerByIdDocument, options);
      }
export function useChurchOwnerByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChurchOwnerByIdQuery, ChurchOwnerByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChurchOwnerByIdQuery, ChurchOwnerByIdQueryVariables>(ChurchOwnerByIdDocument, options);
        }
export type ChurchOwnerByIdQueryHookResult = ReturnType<typeof useChurchOwnerByIdQuery>;
export type ChurchOwnerByIdLazyQueryHookResult = ReturnType<typeof useChurchOwnerByIdLazyQuery>;
export type ChurchOwnerByIdQueryResult = Apollo.QueryResult<ChurchOwnerByIdQuery, ChurchOwnerByIdQueryVariables>;