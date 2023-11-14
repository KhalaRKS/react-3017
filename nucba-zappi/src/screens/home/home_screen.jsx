import React from 'react';
import { CategoryWidget } from '../../components/categories/category_widget/category_widget';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Navbar } from '../../components/navbar/navbar';
import { ProductWidget } from '../../components/products/product_widget/product_widget';
import { HomeLayout } from '../../layout/home/home_layout';

export const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <HomeLayout>
        <Header />
        <CategoryWidget/>
        <ProductWidget />
      </HomeLayout>
      <Footer />
    </>
  );
};
