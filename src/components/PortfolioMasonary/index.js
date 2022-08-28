import React, {Fragment, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './style.scss';

function searchFilter(row, category) {
    return row.category_name.toLowerCase().includes(category.toLowerCase()) || !category;
}

const PortfolioMasonary = ({image_list}) => {
    const [category, setCategory] = useState('');
    const [isOpen, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    function onOpenHandler(id) {
        setOpen(true);
        setPhotoIndex(id - 1);
    }

    const gCatList = image_list !== undefined ? [...new Set(image_list.map(a => a.category_name))] : [];

    return (
        <Fragment>
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <Grid className="portfolioFilter">
                        <Button
                            className={`cBtn cBtnRadius cBtnOutline cBtnUppercase ${category === '' ? 'active' : ''}`}
                            onClick={() => setCategory('',)}>All</Button>
                        {gCatList.map((item, i) => {
                            return (
                                <Button key={i}
                                        className={`cBtn cBtnRadius cBtnOutline cBtnUppercase ${category === item ? 'active' : ''}`}
                                        onClick={() => setCategory(item)}>{item}</Button>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="portfolioGrid container" container spacing={4}>
                <Grid item xs={12}>
                    <Grid container spacing={4}>
                        {image_list !== undefined ? image_list.filter(row => searchFilter(row, category)).map(item => {
                            return (
                                <Grid key={item.id} item xs={12} sm={6} md={4} onClick={() => onOpenHandler(item.id)}>
                                    <img src={item.image} alt="portfolio"/>
                                </Grid>
                            )
                        }) : ''}
                    </Grid>
                </Grid>
                {isOpen && (
                    <Lightbox
                        mainSrc={image_list[photoIndex].image}
                        nextSrc={image_list[(photoIndex + 1) % image_list.length].image}
                        prevSrc={image_list[(photoIndex + image_list.length - 1) % image_list.length].image}
                        onCloseRequest={() => setOpen(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + image_list.length - 1) % image_list.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % image_list.length)}
                    />
                )}
            </Grid>
        </Fragment>
    )
};

export default PortfolioMasonary;