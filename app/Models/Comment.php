<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    //
    protected $fillable = [
        'publisher', 'replied', 'content', 'post_id'
    ];
}
