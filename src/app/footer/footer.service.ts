import { Injectable } from '@angular/core';

export enum MessageType {
    Information = "Info",
    Error = "Error"
}

export interface Message {
    type: MessageType;
    text: string;
}

@Injectable()
export class FooterService {
    private _messageType: MessageType;
    private _messageText: string;
    get message(): Message {
        return { type: this._messageType, text: this._messageText };
    }
    set message(value: Message) {
        this._messageType = value.type;
        this._messageText = value.text;
    }
    clear() {
        this._messageType = null;
        this._messageText = null;
    }
    hasMessage() {
        return this._messageType != null || this._messageText != null;
    }
    

}