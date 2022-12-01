<?php

namespace App\Models;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{
    use HasFactory;
    use HasSlug;
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
        ->generateSlugsFrom('kategori')
        ->saveSlugsTo('slug')
        ->doNotGenerateSlugsOnUpdate();
    }
     protected $fillable = [
        'kategori',
        'slug',

    ];
    public function post()
{
    return $this->hasMany(Post::class);
}
}
