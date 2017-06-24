import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { MediaPlugin, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';

@Component({
  selector: 'page-translation-voice',
  templateUrl: 'translation-voice.html'
})
export class TranslationVoicePage {
  fileRecorded: any;
  fileTransfer: TransferObject;

  constructor(private transfer: Transfer, private media: MediaPlugin, private file: File) {

    this.fileTransfer = this.transfer.create();
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
    const onStatusUpdate = (status) => console.log(status);
    const onSuccess = () => console.log('Action is successful.');
    const onError = (error) => console.error(error.message);
    this.fileRecorded = this.media.create('my_file.wav',  onStatusUpdate, onSuccess, onError);
    this.fileRecorded.startRecord();
  }

  stopRecord(){
    this.fileRecorded.stopRecord();
  }

  startPlay(){
    this.fileRecorded.play();
    console.log('cenas:', this.file.resolveLocalFilesystemUrl(this.file.externalRootDirectory + 'my_file.wav'));
  }



}
