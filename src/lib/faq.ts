// Generate city-specific FAQ items
export function getCityFAQs(cityName: string, state: string) {
  return [
    {
      question: `How much does dumpster rental cost in ${cityName}?`,
      answer: `Dumpster rental in ${cityName}, ${state} typically ranges from $275 to $750 depending on the size you need. A 10-yard dumpster averages $275–$450, while a 40-yard container runs $475–$750. Prices vary by provider, rental duration, and how far the landfill is from your location. Use our quote form above to compare local prices.`,
    },
    {
      question: `What size dumpster do I need for a home cleanout in ${cityName}?`,
      answer: `For a standard home cleanout in ${cityName}, a 20-yard dumpster is the most popular choice — it holds the equivalent of about 10 pickup truck loads and fits most garage, basement, or full-home cleanouts. For a single room or small project, a 10-yard dumpster is usually enough. For a large home or estate cleanout, consider a 30-yard.`,
    },
    {
      question: `How long can I keep a dumpster rental in ${cityName}?`,
      answer: `Most ${cityName} dumpster rental companies include 7 days in the base price. Extended rental is available for $5–$15 per extra day. If your project will take longer than a week, ask about weekly rental rates when you request a quote — many local companies offer discounted long-term pricing.`,
    },
    {
      question: `Do I need a permit to place a dumpster in ${cityName}?`,
      answer: `If you place the dumpster entirely on your own private property (driveway or yard), no permit is typically required in ${cityName}. If the dumpster will sit on a public street or sidewalk, you'll need to obtain a permit from the ${cityName} city or ${state} county public works office. Your rental company can usually advise you and some handle permits for an additional fee.`,
    },
    {
      question: `What items are not allowed in a dumpster in ${cityName}?`,
      answer: `Most ${cityName} dumpster rental companies prohibit: hazardous waste (paint, chemicals, solvents), batteries, tires, appliances containing refrigerants (fridges, AC units), medical waste, and electronics. Always ask your rental company for their specific prohibited items list. Some companies offer separate disposal services for these materials.`,
    },
    {
      question: `How do I find the cheapest dumpster rental in ${cityName}?`,
      answer: `The best way to find cheap dumpster rental in ${cityName} is to compare quotes from multiple local companies — which is exactly what our free quote form does. Avoid overpaying by sizing correctly (renting too large is wasteful), asking about any hidden fees (fuel surcharges, overage charges), and booking early for non-urgent projects.`,
    },
  ]
}

// Generate state-level FAQ items
export function getStateFAQs(stateName: string) {
  return [
    {
      question: `How much does dumpster rental cost in ${stateName}?`,
      answer: `Dumpster rental prices in ${stateName} vary by city, but typically range from $275 to $750 for a standard residential container. Urban areas tend to be more expensive than rural locations due to higher landfill fees and transportation costs. Use our city pages to find accurate local pricing.`,
    },
    {
      question: `Are there statewide regulations for dumpster rental in ${stateName}?`,
      answer: `${stateName} has general waste disposal regulations, but most permit requirements are set at the city or county level. Contact your local public works office if you plan to place a dumpster on a public road. Your rental company will be familiar with local requirements.`,
    },
    {
      question: `How long does dumpster delivery take in ${stateName}?`,
      answer: `Most dumpster rental companies in ${stateName} offer next-day delivery, and some provide same-day service depending on availability. Ordering at least 24–48 hours in advance ensures you get the size you need.`,
    },
  ]
}
