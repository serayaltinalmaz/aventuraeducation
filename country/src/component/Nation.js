import React from 'react'

const Nation = (props) => {

    return (
        <div className="countries">
            <input type="checkbox" checked={props.checkedCountries.includes(props.country)}
                onChange={(event) => props.checkboxChange(event, props.country)}
            />
            <img src={"https://iaaspr.tmgrup.com.tr/8a7cae/0/0/0/0/1152/768?u=https://iaspr.tmgrup.com.tr/2020/04/23/turk-bayragi-tarihcesi-ne-23-nisan-turk-bayragi-fotograflari-1587639637617.jpg&mw=650"}></img>
            <div className="details">
                <p>Name:{props.country.name}</p>
                <p>Capital:{props.country.capital}</p>
                <p>Languages:{props.country.languages}</p>
                <p>Currency:{props.country.currency}</p>
                <p>Population: {props.country.population < 1000000 ? props.country.population.toLocaleString() : (props.country.population / 1000000).toFixed(1) + "M"}</p>
            </div>
        </div>
    )
}

export default Nation