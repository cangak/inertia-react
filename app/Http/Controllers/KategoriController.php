<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kategori;
class KategoriController extends Controller
{
    public function index()
    {
        //get all kategori
        $kategori = Kategori::latest()->withCount('post')->get();

        //return view
        return inertia('Kategori/Index', [
            'kategori' => $kategori
        ]);
    }

    public function create()
    {
        return inertia('Kategori/Create');
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        //set validation
        $request->validate([
            'kategori'   => 'required',
        ]);

        //create kategori
        Kategori::create([
            'kategori'     => $request->kategori,
        ]);

        //redirect
        return redirect()->route('kategori.index')->with('success', 'Data Berhasil Disimpan!');
    }
    public function edit(Kategori $kategori)
    {
        return inertia('Kategori/Edit', [
            'kat' => $kategori,
        ]);
    }

    /**
     * update
     *
     * @param  mixed $request
     * @param  mixed $kategori
     * @return void
     */
    public function update(Request $request, Kategori $kategori)
    {
        //set validation
        $request->validate([
            'kategori'   => 'required',

        ]);

        //update post
        $kategori->update([
            'kategori'     => $request->kategori,
        ]);

        //redirect
        return redirect()->route('kategori.index')->with('success', 'Data Berhasil Diupdate!');
    }
}
