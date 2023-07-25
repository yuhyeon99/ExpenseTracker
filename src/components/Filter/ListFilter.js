import React,{useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import './ListFilter.css';
import {useRecoilState, useRecoilValue} from 'recoil';
import {FilterAtom} from '../../recoil/AtomList';

const ListFilter = () => {
    const [selectedMonth, setSelectedMonth] = useRecoilState(FilterAtom);
    
    const handleMonthChange = (date) => {
        setSelectedMonth(date);
    };

    return(
        <div className="list-filter">
            <DatePicker
                selected={selectedMonth}
                onChange={handleMonthChange}
                dateFormat="yyyy년 MM월"
                showMonthYearPicker
                autoComplete="off"
                locale={ko}
            />
        </div>
    )
}

export default ListFilter;