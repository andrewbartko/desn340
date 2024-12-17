
import '../components/NavBar/navbar.jsx';
import "react";
import FilterComponent from "../components/FilterComponent/FilterComponent.jsx";
import BikeListComponent from "../components/BikeListComponent/BikeListComponent.jsx";
import MyFooter from "../components/MyFooter/MyFooter.jsx";


function Bikes() {
    return (
        <>
            <h1>Bikes</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{display: 'flex', flex: 1}}>
                    <FilterComponent />
                </div>
                <div style={{display: 'flex', flex: 2, padding: '0 1rem 0 1rem' }}>
                    <BikeListComponent />
                </div>

            </div>
            <MyFooter/>

        </>
    );
}

export default Bikes;
