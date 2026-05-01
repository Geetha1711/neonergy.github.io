export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  fullBio?: string;
  photo: string;
  linkedin?: string;
  objectPosition?: string;
  color: string;
}

export interface Client {
  name: string;
  initials: string;
  sector: string;
}
