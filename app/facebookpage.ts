import { User } from './user';

export class FacebookPage {
    id: number;
    name: string;
    owner: User;
    likes: number;
    likes_rise: number;
}
