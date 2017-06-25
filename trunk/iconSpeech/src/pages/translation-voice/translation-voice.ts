import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { MediaPlugin, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import {TranslationVoiceService} from "../../providers/translation-voice-service/translation-voice.service";
import {$WebSocket, WebSocketSendMode} from 'angular2-websocket/angular2-websocket';

@Component({
  selector: 'page-translation-voice',
  templateUrl: 'translation-voice.html'
})
export class TranslationVoicePage {
  fileRecorded: any;
  fileTransfer: TransferObject;
  recording: boolean = false;
  ws :any;

  constructor(private transfer: Transfer, private media: MediaPlugin, private file: File,  private translateVoiceService: TranslationVoiceService) {

    this.fileTransfer = this.transfer.create();
    this.ws = new $WebSocket("ws://echo.websocket.org");

    this.ws.onMessage(
      (msg: MessageEvent)=> {
        console.log("onMessage ", msg.data);
      },
      {autoApply: false}
    );

// set received message stream
    this.ws.getDataStream().subscribe(
      (msg)=> {
        console.log("next", msg.data);
        //ws.close(false);
      },
      (msg)=> {
        console.log("error", msg);
      },
      ()=> {
        console.log("complete");
      }
    );

// send with default send mode (now default send mode is Observer)

  }

  upload() {
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'file.wav',
      headers: {}

    };

    this.fileTransfer.upload('assets/sounds/explosion.wav', 'https://iconspeechserver.eu-gb.mybluemix.net/translation/speech2text', options)
      .then((data) => {
        // success
        console.log('data', data);
      }, (err) => {
        // error
        console.log('error', err);
      })
  }

  startRecord(){
   /* this.recording = true;
    const onStatusUpdate = (status) => console.log(status);
    const onSuccess = () => console.log('Action is successful.');
    const onError = (error) => console.error(error.message);
    this.fileRecorded = this.media.create('my_file.mp3',  onStatusUpdate, onSuccess, onError);
    this.fileRecorded.startRecord();
    */
    this.ws.send("some thing").subscribe(
      (msg)=> {
        console.log("next", msg.data);
      },
      (msg)=> {
        console.log("error", msg);
      },
      ()=> {
        console.log("complete");
      }
    );
  }

  stopRecord(){
    this.recording = false;
    this.fileRecorded.stopRecord();

    this.startPlay();
  }

  startPlay(){
    this.fileRecorded.play();

     this.file.readAsDataURL(this.file.externalRootDirectory, 'my_file.mp3').then((data) => {
       console.log('data', data);
       let params = {
         data: data
       };
       this.translateVoiceService.speech2text(params).subscribe((data) => {
         console.log('data response', data);
       });
    });


  }





}
