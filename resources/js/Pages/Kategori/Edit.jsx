//import hook useState from react
import React, { useState } from 'react';
//import layout
import Layout from '../../Layouts/Default';
//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function EditKategori({ errors ,kat}) {

    //define state
    const [kategori, setKategori] = useState(kat.kategori);

    //function "editKategori"
    const updateKategori = async (e) => {
        e.preventDefault();

        Inertia.put(`/kategori/${kat.id}`, {
            kategori: kategori,
        });
    }

    return (
        <Layout>
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <span className="font-weight-bold">EDIT KATEGORI</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updateKategori}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Kategori</label>
                                    <input type="text" className="form-control" value={kategori} onChange={(e) => setKategori(e.target.value)} placeholder="Masukkan Kategori" />
                                </div>
                                {errors.kategori && (
                                    <div className="alert alert-danger">
                                        {errors.kategori}
                                    </div>
                                )}
                                <div>
                                    <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> SAVE</button>
                                    <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> RESET</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
