//import React
import React from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import Link
import { Link } from '@inertiajs/inertia-react';

export default function KategoriIndex({ kategori, session }) {

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
