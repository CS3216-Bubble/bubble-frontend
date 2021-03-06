import { Message } from '../message/message';

export class Chat {
  roomId: string;
  roomName: string = '';
  userLimit: number;
  roomType: number;
  numberOfUsers: number;
  roomDescription: string = '';
  categories: string[];
  lastActive: Date;
  messages: Message[];

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}
