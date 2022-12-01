//import React
import React from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import Link
import { Link } from '@inertiajs/inertia-react';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';


export default function KategoriIndex({ kategori, session }) {
 //method deletePost
 const deleteKategori = async (id) => {
    Inertia.delete(`/kategori/${id}`);
}
  return (
    <Layout>
        <div style={{ marginTop: '100px' }}>

            <Link href="/kategori/create" className="btn btn-success btn-md mb-3">TAMBAH KATEGORI</Link>

            {session.success && (
                <div className="alert alert-success border-0 shadow-sm rounded-3">
                    {session.success}
                </div>
            )}

            <div className="card border-0 rounded shadow-sm">
                <div className="card-body">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">KATEGORI</th>
                                <th scope="col">SLUG</th>
                            </tr>
                        </thead>
                        <tbody>
                        { kategori.map((kat, index) => (
                            <tr key={ index }>
                                <td>{ kat.kategori }</td>
                                <td>{ kat.slug }</td>
                                <td className="text-center">
                                <Link href={`/kategori/${kat.id}/edit`} className="btn btn-sm btn-primary me-2">EDIT</Link>
                                <button onClick={() => deleteKategori(kat.id)} className="btn btn-sm btn-danger">DELETE</button>

                                </td>
                            </tr>
                        )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Layout>
  )
}
