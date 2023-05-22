import React, { Fragment, useState } from 'react';
import { PageHero, Btn } from '../components';
import { sortOptions } from '../utils/data';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import ProductList from '../components/ProductList';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helpers';

const ProductsPage = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const {
    sort,
    filters: { category, company, color, price },
    updateSort,
    updateFilters,
    clearFilters,
    all_products,
    setGridView,
    setListView,
    filtered_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');
  const prices = getUniqueValues(all_products, 'price');

  return (
    <>
      <PageHero title="Products" />
      <div>
        {/* FILTER OPTIONS PANEL ON MOBILE */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                {/* Filter header */}
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Filter options*/}
                <form
                  className="mt-4 border-t border-gray-200"
                  onSubmit={e => e.preventDefault()}
                >
                  <h3 className="sr-only">Filters</h3>

                  {/* Category filter */}
                  <Disclosure
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        {/* Category filter header */}
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              Category
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M18 12H6" />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>

                        {/* Category filter panel */}
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {categories.map((option, optionIdx) => (
                              <div
                                key={optionIdx}
                                className="flex items-center"
                              >
                                <button
                                  name="category"
                                  type="button"
                                  onClick={updateFilters}
                                  className={`${
                                    option.toLowerCase() === category
                                      ? 'font-bold'
                                      : null
                                  }  text-gray-500 capitalize`}
                                >
                                  {option}
                                </button>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  {/* Category filter end*/}

                  {/* Company filter */}
                  <Disclosure
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        {/* Company filter header */}
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              Brand
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M18 12H6" />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>

                        {/* Company filter panel */}
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {companies.map((option, optionIdx) => (
                              <div
                                key={optionIdx}
                                className="flex items-center"
                              >
                                <button
                                  name="company"
                                  type="button"
                                  onClick={updateFilters}
                                  className={`${
                                    option === company ? 'font-bold' : null
                                  }  text-gray-500 capitalize`}
                                >
                                  {option}
                                </button>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  {/* Company filter end*/}

                  {/* Color filter */}
                  <Disclosure
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        {/* Filter header */}
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              Color
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M18 12H6" />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>

                        {/* Filter panel */}
                        <Disclosure.Panel className="pt-6">
                          <div className="flex  items-end">
                            {colors?.map((c, index) => {
                              if (c === 'all') {
                                return (
                                  <button
                                    key={index}
                                    name="color"
                                    onClick={updateFilters}
                                    type="button"
                                    data-color="all"
                                    className={`${
                                      color === 'all' ? 'font-bold' : ''
                                    } capitalize mr-2 text-xl`}
                                  >
                                    all
                                  </button>
                                );
                              }
                              return (
                                <button
                                  key={index}
                                  name="color"
                                  onClick={updateFilters}
                                  type="button"
                                  data-color={c}
                                  style={{ backgroundColor: c }}
                                  className={`border-2 border-gray-300 rounded-full mr-1 w-6 h-6 focus:outline-none flex items-center justify-center`}
                                >
                                  {color === c ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="#fff"
                                    >
                                      <path d="M5 13l4 4L19 7" />
                                    </svg>
                                  ) : null}
                                </button>
                              );
                            })}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  {/* Color filter end*/}

                  {/* Price filter*/}
                  <Disclosure
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        {/* Price header */}
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              Price
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M18 12H6" />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>

                        {/* Price panel */}
                        <Disclosure.Panel className="pt-6">
                          {/* <div className="space-y-6">
                            {companies.map((option, optionIdx) => (
                              <div
                                key={optionIdx}
                                className="flex items-center"
                              >
                                <button
                                  name="company"
                                  type="button"
                                  onClick={updateFilters}
                                  className={`${
                                    option.toLowerCase() === company
                                      ? 'font-bold'
                                      : null
                                  }  text-gray-500 capitalize`}
                                >
                                  {option}
                                </button>
                              </div>
                            ))}
                          </div> */}
                          <div className="space-y-6">
                            {prices.map((p, priceIdx) => {
                              if (p === 'all') {
                                return (
                                  <div
                                    key={priceIdx}
                                    className="flex-col items-center"
                                  >
                                    <button
                                      name="price"
                                      data-price={priceIdx}
                                      onClick={updateFilters}
                                      className={`${
                                        priceIdx === price ? 'font-bold' : null
                                      }  text-gray-500 capitalize`}
                                    >
                                      all
                                    </button>
                                  </div>
                                );
                              }
                              return (
                                <div
                                  key={priceIdx}
                                  className="flex-col items-center"
                                >
                                  <button
                                    key={priceIdx}
                                    name="price"
                                    data-price={p}
                                    onClick={updateFilters}
                                    className={`${
                                      p === price ? 'font-bold' : null
                                    }  text-gray-500 capitalize`}
                                  >
                                    from {formatPrice(p)}
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  {/* Price filter  end*/}
                </form>

                {/* Go back, Clear filter btns */}
                <div className="flex justify-between mt-8 px-2">
                  {/* Go back btn*/}
                  <button
                    className="flex justify-center"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <Btn name="Go back" type="button" />
                  </button>
                  {/* Go back btn end*/}
                  {/* Clear filters btn*/}
                  <button
                    className="flex justify-center"
                    onClick={() => clearFilters()}
                  >
                    <Btn name="Clear filters" type="button" />
                  </button>
                  {/* Clear filters btn end*/}
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
        <main className="section-center">
          {/* PRODUCT AMOUNT + SORT OPTIONS */}
          <div className=" z-10 flex flex-col  sm:flex-row items-baseline justify-between pt-24 pb-6 border-b border-gray-200 ">
            {/* Products quantity*/}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
              {`${filtered_products.length} products`}
            </h2>

            {/* Sorts */}
            <div className="flex flex-col sm:flex-row sm:items-start ">
              <form className="relative inline-block text-left -mr-2 sm:mr-4 mb-6 ">
                <label className="text-gray-700" htmlFor="sort"></label>
                <select
                  id="sort"
                  className="py-1 "
                  onChange={updateSort}
                  value={sort}
                >
                  {sortOptions.map(option => (
                    <option
                      key={option.name}
                      value={option.value}
                      className="text-gray-500 block px-4 py-2"
                    >
                      {option.name}
                    </option>
                  ))}
                </select>
              </form>

              <div className="flex justify-between ">
                {/* Grid btn */}
                <button
                  type="button"
                  className="p-2 sm:p-2  sm:ml-5 text-gray-400 hover:text-gray-500 bg-tertiary-100"
                  onClick={() => setGridView()}
                >
                  <span className="sr-only">Grid view</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 "
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>

                {/* List btn */}
                <button
                  type="button"
                  className="p-2 sm:p-2  sm:ml-5 text-gray-400 hover:text-gray-500 bg-tertiary-100"
                  onClick={() => setListView()}
                >
                  <span className="sr-only">List view</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>

                {/* Filter btn */}
                <button
                  type="button"
                  className="p-2 sm:p-2  sm:ml-5 text-gray-400 hover:text-gray-500 lg:hidden bg-tertiary-100"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* FILTER OPTIONS PANEL ON LARGE SCREEN + PRODUCT GRID/LIST */}
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filter options */}
              <div className="hidden lg:block ">
                <form onSubmit={e => e.preventDefault()}>
                  <h3 className="sr-only">Filters</h3>

                  {/* Category filter */}
                  <Disclosure
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        {/* Category filter header */}
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              Category
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M18 12H6" />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>

                        {/* Category filter panel */}
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {categories.map((option, optionIdx) => (
                              <div
                                key={optionIdx}
                                className="flex items-center"
                              >
                                <button
                                  name="category"
                                  type="button"
                                  onClick={updateFilters}
                                  className={`${
                                    option.toLowerCase() === category
                                      ? 'font-bold'
                                      : null
                                  }  text-gray-500 capitalize`}
                                >
                                  {option}
                                </button>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  {/* Category filter end*/}

                  {/* Company filter */}
                  <Disclosure
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        {/* Company filter header */}
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              Brand
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M18 12H6" />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>

                        {/* Company filter panel */}
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {companies.map((option, optionIdx) => (
                              <div
                                key={optionIdx}
                                className="flex items-center"
                              >
                                <button
                                  name="company"
                                  type="button"
                                  onClick={updateFilters}
                                  className={`${
                                    option === company ? 'font-bold' : null
                                  }  text-gray-500 capitalize`}
                                >
                                  {option}
                                </button>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  {/* Company filter end*/}

                  {/* Color filter */}
                  <Disclosure
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        {/* Color filter header */}
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              Color
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M18 12H6" />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>

                        {/* Color filter panel */}
                        <Disclosure.Panel className="pt-6">
                          <div className="flex  items-end">
                            {colors?.map((c, index) => {
                              if (c === 'all') {
                                return (
                                  <button
                                    key={index}
                                    name="color"
                                    onClick={updateFilters}
                                    type="button"
                                    data-color="all"
                                    className={`${
                                      color === 'all' ? 'font-bold' : ''
                                    } capitalize mr-2 text-xl`}
                                  >
                                    all
                                  </button>
                                );
                              }
                              return (
                                <button
                                  key={index}
                                  name="color"
                                  onClick={updateFilters}
                                  type="button"
                                  data-color={c}
                                  style={{ backgroundColor: c }}
                                  className={`border-2 border-gray-300 rounded-full mr-1 w-6 h-6 focus:outline-none flex items-center justify-center`}
                                >
                                  {color === c ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="#fff"
                                    >
                                      <path d="M5 13l4 4L19 7" />
                                    </svg>
                                  ) : null}
                                </button>
                              );
                            })}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  {/* Color filter end*/}

                  {/* Price filter*/}
                  <Disclosure
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        {/* Price filter header */}
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              Price
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                ></svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>

                        {/* Price filter panel */}
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {prices.map((p, priceIdx) => {
                              if (p === 'all') {
                                return (
                                  <div
                                    key={priceIdx}
                                    className="flex-col items-center"
                                  >
                                    <button
                                      name="price"
                                      data-price={priceIdx}
                                      onClick={updateFilters}
                                      className={`${
                                        priceIdx === price ? 'font-bold' : null
                                      }  text-gray-500 capitalize`}
                                    >
                                      all
                                    </button>
                                  </div>
                                );
                              }
                              return (
                                <div
                                  key={priceIdx}
                                  className="flex-col items-center"
                                >
                                  <button
                                    key={priceIdx}
                                    name="price"
                                    data-price={p}
                                    onClick={updateFilters}
                                    className={`${
                                      p === price ? 'font-bold' : null
                                    }  text-gray-500 capitalize`}
                                  >
                                    {`>=${formatPrice(p)}`}
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  {/* Price filter  end*/}
                </form>

                {/* Clear filters btn*/}
                <div
                  className="flex justify-start mt-5"
                  onClick={() => clearFilters()}
                >
                  <Btn name="Clear filters" type="button" />
                </div>
                {/* Clear filters btn end*/}
              </div>

              {/* Product list */}
              <div className="lg:col-span-3">
                <ProductList />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProductsPage;
