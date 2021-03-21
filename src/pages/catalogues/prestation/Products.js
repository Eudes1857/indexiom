import React, { useState , useEffect} from 'react'
import axios from "axios"
import Product from './Product';
import Category from './Category';
import SubCategory from './subCategory'
import { Container, Row, Section, SectionOverlay } from '../../../styles/styles';

export default function Products(props) {
    const [catalogues, getCatalogues] = useState('');
    const [active, setActive] = useState(1);
    const [subActive, setSubActive] = useState(3)

    const url ="http://localhost:8000/catalogues";

    useEffect(() => {
        getAllPacks();
    }, [url])

    const getAllPacks = () =>{
        axios
        .get(url)
        .then((res) =>{
            const allCatalogues = res.data[0].categories
            getCatalogues(allCatalogues)
            console.log(allCatalogues)
        })
        .catch((error) => console.error(`Error:${error}`));
    }


    const handleSelection = e => {
        e.preventDefault();
        const index = parseInt(e.target.getAttribute("id"), 10);
        return setActive(index);
    };

    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
        setActive(index);
        }
    };

    const handleSubClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== subActive) {
        setSubActive(index);
        }
    };

    const isActive = index => {
        return index === active;
    };

    const renderCategory = (cat, index) =>(
        <Category
        cat={cat}
        //key={index}
        index={cat.id}
        handleSelection={handleClick}
        active={active}
        />
    )

    const renderSubCategory = (subCat, index) =>(
        <SubCategory
        subCat={subCat}
        //key={index}
        //index={index}
        handleSelection={handleSubClick}
        active={active}
        subActive={subActive}
        />
    )

    const renderProduct = (cat, index) => (<Product index={index} cat={cat} active={active} subActive={subActive}/>);

    return (
        <>
        <Section>
            <SectionOverlay bgcolor="#e5e5e5">
                <Container>
                    <Row>
                    <div className="catalogCat">
                        {
                            catalogues.length > 0 ?
                            catalogues.map(renderCategory)
                            : ''
                        }
                    </div>
                    </Row>
                </Container>
            </SectionOverlay>
        </Section>
        <Section>
        <Container> 
            <Row>
            {
                catalogues.length > 0 ?
                catalogues.map(renderSubCategory)
                : ''
            }
            {
                catalogues.length > 0 ?
                catalogues.map(renderProduct)
                : ''
            }
            </Row>
        </Container>
        </Section>
        </>
    )
}
