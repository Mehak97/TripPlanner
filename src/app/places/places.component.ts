import { Component, OnInit } from '@angular/core';
import { Video } from '../../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  providers:[VideoService]
})
export class PlacesComponent implements OnInit {

  videos:Array<Video>;
  selectedVideo:Video;

/*videos:Video[]=[
  {"_id":"1","title":"title1","url":"url1","description":"desc1"},
  {"_id":"2","title":"title2","url":"url2","description":"desc2"},
  {"_id":"3","title":"title3","url":"url3","description":"desc3"}
];*/


constructor(private _videoService:VideoService){}

  ngOnInit(){
    this._videoService.getVideos()
    .subscribe(resVideoData => this.videos=resVideoData);
  }


  onSelectVideo(video:any)
  {
     this.selectedVideo=video;
     console.log(this.selectedVideo);
  }
}
