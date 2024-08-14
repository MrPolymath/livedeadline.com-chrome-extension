import React, { useState } from 'react';

const Pizza = () => {
  const [pizzaState, setPizzaState] = useState({
    size: 280,
    nPizzas: 6,
    percentHidration: 63,
    fermentationTime: 8,
    temperature: 23,
  });
  const { size, nPizzas, percentHidration, fermentationTime, temperature } =
    pizzaState;
  const flour = Math.round(
    ((size * nPizzas) / (1 + percentHidration / 100 + 0.03)) | ''
  );
  const yeast = Math.round(
    (flour * 23) / (percentHidration * fermentationTime * temperature)
  );
  const water = Math.round((flour * percentHidration) / 100);
  const salt = Math.round(flour * 0.03);

  return (
    <div className="h-[calc(100%-64px)] flex items-center justify-center p-20">
      <div className="w-1/2 border-r-slate-500 border-r-2 pb-5">
        {/* Pizza Size */}
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5">
          <label
            htmlFor="pizza-size"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Pizza Size (gr)
          </label>
          <div className="mt-1 sm:col-span-2 sm:mt-0">
            <input
              type="number"
              name="pizza-size"
              id="pizza-size"
              min={1}
              value={pizzaState.size}
              onChange={(e) =>
                setPizzaState({ ...pizzaState, size: parseInt(e.target.value) })
              }
              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
            />
          </div>
        </div>
        {/* Number of Pizzas */}
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5">
          <label
            htmlFor="number-pizzas"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Number of Pizzas
          </label>
          <div className="mt-1 sm:col-span-2 sm:mt-0">
            <input
              type="number"
              name="number-pizzas"
              id="number-pizzas"
              value={pizzaState.nPizzas}
              onChange={(e) =>
                setPizzaState({
                  ...pizzaState,
                  nPizzas: parseInt(e.target.value),
                })
              }
              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
            />
          </div>
        </div>
        {/* Hidration */}
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5">
          <label
            htmlFor="number-pizzas"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Hidration (%)
          </label>
          <div className="mt-1 sm:col-span-2 sm:mt-0">
            <input
              type="number"
              name="percent-hidration"
              id="percent-hidration"
              value={pizzaState.percentHidration}
              max={100}
              min={1}
              onChange={(e) =>
                setPizzaState({
                  ...pizzaState,
                  percentHidration: parseInt(e.target.value),
                })
              }
              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
            />
          </div>
        </div>
        {/* Fermentation Time (h) */}
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5">
          <label
            htmlFor="number-pizzas"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Fermentation Time (h)
          </label>
          <div className="mt-1 sm:col-span-2 sm:mt-0">
            <input
              type="number"
              name="rising-hours"
              id="rising-hours"
              value={pizzaState.fermentationTime}
              min={1}
              onChange={(e) =>
                setPizzaState({
                  ...pizzaState,
                  fermentationTime: parseInt(e.target.value),
                })
              }
              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
            />
          </div>
        </div>
        {/* Temperature Outside (°C) */}
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5">
          <label
            htmlFor="number-pizzas"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Temperature Outside (°C)
          </label>
          <div className="mt-1 sm:col-span-2 sm:mt-0">
            <input
              type="number"
              name="outside-temperature"
              id="outside-temperature"
              value={pizzaState.temperature}
              max={100}
              min={1}
              onChange={(e) =>
                setPizzaState({
                  ...pizzaState,
                  temperature: parseInt(e.target.value),
                })
              }
              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 p-20">
        <div className="bg-white w-auto shadow-xl p-5 rounded-md">
          <div className="flex text-xl justify-between">
            <div className="font-bold">Flour</div>
            <div>{flour}gr</div>
          </div>
          <div className="flex text-xl justify-between">
            <div className="font-bold">Water</div>
            <div>{water}gr</div>
          </div>
          <div className="flex text-xl justify-between">
            <div className="font-bold">Yeast</div>
            <div>{yeast}gr</div>
          </div>
          <div className="flex text-xl justify-between">
            <div className="font-bold">Salt</div>
            <div>{salt}gr</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
