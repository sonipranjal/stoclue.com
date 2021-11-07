import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NewsletterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Newsletter {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly date: string;
  readonly body: string;
  readonly slug: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Newsletter, NewsletterMetaData>);
  static copyOf(source: Newsletter, mutator: (draft: MutableModel<Newsletter, NewsletterMetaData>) => MutableModel<Newsletter, NewsletterMetaData> | void): Newsletter;
}