import React from 'react';
import { useEffect, useState } from 'react';
import { ReadQuery, fetchQuery, sortTable } from './../api/Data';
import { InsertBtn } from './../components/Button/InsertBtn';
import SortMenuBtn from './../components/Button/SortMenu';
import EmployeeDataList from './../components/EmployeeList/EmployeeList';
import Modal, { useModal } from './../components/Modal/Modal';
import SearchBar from './../components/SearchBar/SearchBar';
import { GetValueContext } from './../contexts/Contexts';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    const [employeeList, setEmployeeList] = useState([]);
    const [sortOptions, setSortOptions] = useState('');
    const [searchQuery, setSearchQuery] = useState(null);
    const [deleteId, setDeleteId] = useState(0);
    const [updateId, setUpdateId] = useState(0);

    const { insertModal, deleteModal, updateModal } = useModal((state) => ({
        insertModal: state.insertModal,
        deleteModal: state.deleteModal,
        updateModal: state.updateModal,
    }));

    useEffect(() => {
        if (searchQuery !== null) {
            fetchQuery(searchQuery, setEmployeeList);
        } else if (sortOptions !== '') {
            sortTable(sortOptions, setEmployeeList);
        } else ReadQuery(setEmployeeList);
    }, [insertModal, deleteModal, updateModal, sortOptions, searchQuery]);
  
    return (
        <div className="App h-screen flex flex-col items-center">
			<div className="w-full grid grid-cols-2 gap-4">

                
                <div className="column-1">
                
            
                    <h1 className="text-left w-full text-3xl p-8 font-semibold" style={{ fontFamily: 'Arial, sans-serif', color: '#FFFFFF' }}>
                        HR Analysis
                    </h1>

                                
                    <div className="links-row" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', paddingLeft: '8px', flexWrap: 'nowrap' }}>
                        <Link to="/Performance" className="text-left text-xl font-semibold hover:text-brown-800" style={{ 
                                fontFamily: 'Arial, sans-serif', 
                                color: '#FFFFFF', 
                                whiteSpace: 'nowrap', 
                                padding: '8px',
                                fontSize: '1.2rem',
                                maxWidth: '100%' }}>
                            Performance Metrics
                        </Link>

                        <Link to="/RemoteWork" className="text-left text-xl font-semibold hover:text-brown-800" style={{ 
                                fontFamily: 'Arial, sans-serif', 
                                color: '#FFFFFF', 
                                whiteSpace: 'nowrap', 
                                padding: '8px',
                                fontSize: '1.2rem',
                                maxWidth: '100%'  }}>
                            Remote Work Analysis
                        </Link>

                        <Link to="/Training" className="text-left text-xl font-semibold hover:text-brown-800" style={{ 
                                fontFamily: 'Arial, sans-serif', 
                                color: '#FFFFFF', 
                                whiteSpace: 'nowrap', 
                                padding: '8px',
                                fontSize: '1.2rem',
                                maxWidth: '100%'  }}>
                            Training and Development
                        </Link>

                        <Link to="/Compensation" className="text-left text-xl font-semibold hover:text-brown-800" style={{ 
                                fontFamily: 'Arial, sans-serif', 
                                color: '#FFFFFF', 
                                whiteSpace: 'nowrap', 
                                padding: '8px',
                                fontSize: '1.2rem',
                                maxWidth: '100%'  }}>
                            Compensation and Benefits
                        </Link>
                    </div>
                       

                        
                    
                </div>

            </div>   
            <div className="column-2">
                <GetValueContext.Provider value={{ deleteId, updateId }}>
                    <Modal employeeList={employeeList} />
                </GetValueContext.Provider>
                <h1 className="text-white text-center text-6xl p-8 mt-3 font-semibold" style={{ fontFamily: 'Arial, sans-serif' }}>
 					 
				</h1>
                <div className="bg-slate-50 p-8 my-0 mx-12 min-w-[920px] max-w-[1028px] rounded-2xl max-h-[28rem]">
                    <div className="child:mx-4 w-full flex justify-between">
                        <SortMenuBtn setSortOptions={setSortOptions} />
                        <SearchBar employeeList={employeeList} setSearchQuery={setSearchQuery} />
                        <InsertBtn />
                    </div>

                
                    <EmployeeDataList employeeList={employeeList} setDeleteId={setDeleteId} setUpdateId={setUpdateId} />
                </div>
        
            </div>    
        </div>
  );
};

export default HomePage;