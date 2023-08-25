import React from 'react';
import Navs from './components/Navs';
import { Routes , Route, Form } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { AlertExample } from './components/AlertExample';
import { ButtonExample } from './components/ButtonExample';
import { ButtonGroupExample } from './components/ButtonGroupExample';
import { BadgeExample } from './components/BadgeExample';
import { ProgressBarExample } from './components/ProgressBarExample';
import { SpinnerExample } from './components/SpinnerExample';
import { ScrollspyExample } from './components/ScrollspyExample';
import { ListGroupExample } from './components/ListGroupExample';
import { CardExample } from './components/CardExample';
import { DropdownExample } from './components/DropdownExample';
import { NavBarExample } from './components/NavBarExample';
import { FormExample } from './components/FormExample';
import { InputGroupExample } from './components/InputGroupExample';
import { BreadcrumbExample } from './components/BreadcrumbExample';
import { CarouselExample } from './components/CarouselExample';
import { ToastExample } from './components/ToastExample';
import { TooltipExample } from './components/TooltipExample';
import { PopoverExample } from './components/PopoverExample';
import { CollapseExample } from './components/CollapseExample';
import { ModalExample } from './components/ModalExample';
import { PaginationExample } from './components/PaginationExample';
import { AnimationExample } from './components/AnimationExample';
import { ResponsiveExample } from './components/ResponsiveExample';

function App() {
  return (
    <>
      <Navs />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='alert' element={<AlertExample />} />
        <Route path='button' element={<ButtonExample />} />
        <Route path='button-group' element={<ButtonGroupExample />} />
        <Route path='badge' element={<BadgeExample />} />
        <Route path='progress-bar' element={<ProgressBarExample />} />
        <Route path='spinner' element={<SpinnerExample />} />
        <Route path='scrollspy' element={<ScrollspyExample />} />
        <Route path='list-group' element={<ListGroupExample />} />
        <Route path='card' element={<CardExample />} />
        <Route path='dropdown' element={<DropdownExample />} />
        <Route path='navbar' element={<NavBarExample />} />
        <Route path='form' element={<FormExample />} />
        <Route path='input-group' element={<InputGroupExample />} />
        <Route path='breadcrumb' element={<BreadcrumbExample />} />
        <Route path='carousel' element={<CarouselExample />} />
        <Route path='toast' element={<ToastExample />} />
        <Route path='tooltip' element={<TooltipExample />} />
        <Route path='popover' element={<PopoverExample />} />
        <Route path='collapse' element={<CollapseExample />} />
        <Route path='modal' element={<ModalExample />} />
        <Route path='pagination' element={<PaginationExample />} />
        <Route path='animation' element={<AnimationExample />} />
        <Route path='responsive' element={<ResponsiveExample />} />
      </Routes>
    </>
  );
}

export default App;
