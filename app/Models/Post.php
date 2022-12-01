<?php

namespace App\Models;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    use HasSlug;

    /**
     * fillable
     *
     * @var array
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
        ->generateSlugsFrom('judul')
        ->saveSlugsTo('slug')
        ->doNotGenerateSlugsOnUpdate();
    }
     protected $fillable = [
        'judul',
        'gambar',
        'content',
        'slug'
    ];
    public function kategori()
{
    return $this->belongsTo(Kategori::class);
}
}
