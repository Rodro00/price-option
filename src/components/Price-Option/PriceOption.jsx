import Price from "../Price/Price";


const PriceOption = () => {
  const priceOptions = [
    {
      id: 1,
      name: 'Basic Membership',
      price: 29.99,
      features: [
        'Access to cardio equipment',
        'Access to weightlifting area',
        'Locker room access',
        'One fitness class per week'
      ]
    },
    {
      id: 2,
      name: 'Standard Membership',
      price: 49.99,
      features: [
        'Full gym access',
        'Unlimited fitness classes',
        'Personal trainer consultation',
        'Access to sauna and steam room'
      ]
    },
    {
      id: 3,
      name: 'Premium Membership',
      price: 79.99,
      features: [
        'All Standard Membership benefits',
        '24/7 gym access',
        'Nutritional counseling',
        'Free massage session monthly'
      ]
    }
  ];
  
  return (
    <div>
      <h1 className="font-bold text-3xl text-center">Best Prices in the Market</h1>
    <div className="grid md:grid-cols-3 gap-4 m-12">
    {
      priceOptions.map(option=><Price option={option}></Price>)
     }
    </div>
    </div>
  );
};

export default PriceOption;