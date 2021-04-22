import React from 'react';
import { Layout } from '../common/layout';
import './student.scss';

export const Student = (props) => {
    return (
       <Layout props={props}>
            <div className='student-1j4'>
                <form className='add-student-form'>
                    <div className='form-group-student'>
                        <label className='label'>ID</label>
                        <input type='text' className='input-student' id='id' placeholder='Thêm id...'/>
                    </div>
                    <div className='form-group-student'>
                        <label className='label'>Họ và Tên</label>
                        <input type='text' className='input-student' id='name' placeholder='Nhập họ tên...'/>
                    </div>
                    <div className='form-group-student'>
                        <label className='label'>Lớp học</label>
                        <input type='text' className='input-student' id='class' placeholder='Nhập lớp học...'/>
                    </div>
                    <div className='form-group-student'>
                        <label className='label'>SĐT</label>
                        <input type='text' className='input-student' id='phone-number' placeholder='Nhập sđt...'/>
                    </div>
                    <div className='form-group-student'>
                        <label className='label'>Email</label>
                        <input type='text' className='input-student' id='email' placeholder='Nhập email...'/>
                    </div>
                    <input type='submit' className='button-add-student' value='Thêm học sinh'/>
                </form>

                <table className='table-student'>
                    <thead className='list-attributes-student'>
                       <tr className='table-row-student'>
                           <td className='id-student'>ID</td>
                           <td className='name-student'>Họ và Tên</td>
                           <td className='class'>Lớp học</td>
                           <td className='phone-number-student'>SĐT</td>
                           <td className='email-student'>Email</td>
                       </tr>
                    </thead>
                    <tbody className='list-student-1j4'>

                    </tbody>
                </table>
            </div>
       </Layout>
    )
}
