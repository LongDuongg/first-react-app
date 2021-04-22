import React from 'react';
import { Layout } from '../common/layout';
import "./teacher.scss";

export const Teacher = (props) => {
    return (
        <Layout props={props}>
            <div className='teacher-1k3'>
                <form className='add-teacher-form'>
                    <div className='form-group-teacher'>
                        <label className='label'>ID</label>
                        <input type='text' className='input' id='id' placeholder='Thêm id...'/>
                    </div>
                    <div className='form-group-teacher'>
                        <label className='label'>Họ và Tên</label>
                        <input type='text' className='input' id='name' placeholder='Nhập họ tên...'/>
                    </div>
                    <div className='form-group-teacher'>
                        <label className='label'>Môn học</label>
                        <input type='text' className='input' id='subject' placeholder='Nhập môn học...'/>
                    </div>
                    <div className='form-group-teacher'>
                        <label className='label'>SĐT</label>
                        <input type='text' className='input' id='phone-number' placeholder='Nhập sđt...'/>
                    </div>
                    <div className='form-group-teacher'>
                        <label className='label'>Email</label>
                        <input type='text' className='input' id='email' placeholder='Nhập email...'/>
                    </div>
                    <input type='submit' className='button-add' value='Thêm giáo viên'/>
                </form>

                <table className='table-4j3'>
                    <thead className='list-attributes-3j2'>
                       <tr className='table-row-8h4'>
                           <td className='id-teacher'>ID</td>
                           <td className='name-teacher'>Họ và Tên</td>
                           <td className='subject'>Môn học</td>
                           <td className='phone-number-teacher'>SĐT</td>
                           <td className='email-teacher'>Email</td>
                       </tr>
                    </thead>
                    <tbody className='list-teachers-1j4'>

                    </tbody>
                </table>
            </div>
        </Layout>
    )
}


