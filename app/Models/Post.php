<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $casts=[
        'image_url'=>"array"
    ];
    protected $appends=["full_url",'is_liked','is_bookmarked'];


    public function getFullUrlAttribute(){
          $images=$this->image_url;
          $imageNameList=[];
          if (gettype($images)=="NULL")return [];
          if(gettype($images)=="string"){
              return [$images];
          }

          foreach ($images as $image){
              if ($image['name']!=null){
                  array_push($imageNameList,asset("storage/images/".$this->user_id."/".$image['name']));
              }

          }
          return $imageNameList;
    }

    public function getIsLikedAttribute(){
        return $this->like()->find(auth()->user()['id'])!=null;
    }
    public function getIsBookmarkedAttribute(){
        return $this->bookmark()->find(auth()->user()['id'])!=null;
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function comments(){
        return $this->hasMany(Comment::class);
    }
    public function like(){
        return $this->belongsToMany(User::class);
    }
    public function bookmark(){
        return $this->belongsToMany(User::class,"post_bookmark");
    }

}
