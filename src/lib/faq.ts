// Generate city-specific FAQ items
export interface CityFAQOpts {
  bizCount?: number
  avgPrice20yd?: string
  population?: number
  county?: string
}

export function getCityFAQs(cityName: string, state: string, opts?: CityFAQOpts) {
  const hasBizCount = opts?.bizCount != null && opts.bizCount > 0
  const hasPrice = opts?.avgPrice20yd != null
  const hasPopulation = opts?.population != null && opts.population > 0
  const county = opts?.county

  // Base FAQs — enhanced with real data when available
  const faqs = [
    {
      question: `How much does dumpster rental cost in ${cityName}?`,
      answer: hasPrice
        ? `A 20-yard dumpster in ${cityName}, ${state} costs approximately ${opts!.avgPrice20yd}. Prices vary by size — a 10-yard dumpster is the most affordable option, while a 40-yard container is the largest and most expensive. Rental duration and landfill distance also affect pricing. Use our free quote form to compare rates from local companies.`
        : `Dumpster rental in ${cityName}, ${state} varies by size and provider — see the local pricing table above for current estimates. Generally, a 10-yard dumpster is the most affordable option, while a 40-yard container is the largest and most expensive. Prices also depend on rental duration and landfill distance. Use our free quote form to compare rates from local companies.`,
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
      answer: county
        ? `If you place the dumpster entirely on your own private property (driveway or yard), no permit is typically required in ${cityName}. If the dumpster will sit on a public street or sidewalk, you'll need to obtain a permit from the ${cityName} city or ${county} public works office. Your rental company can usually advise you and some handle permits for an additional fee.`
        : `If you place the dumpster entirely on your own private property (driveway or yard), no permit is typically required in ${cityName}. If the dumpster will sit on a public street or sidewalk, you'll need to obtain a permit from the ${cityName} city or ${state} county public works office. Your rental company can usually advise you and some handle permits for an additional fee.`,
    },
    {
      question: `What items are not allowed in a dumpster in ${cityName}?`,
      answer: `Most ${cityName} dumpster rental companies prohibit: hazardous waste (paint, chemicals, solvents), batteries, tires, appliances containing refrigerants (fridges, AC units), medical waste, and electronics. Always ask your rental company for their specific prohibited items list. Some companies offer separate disposal services for these materials.`,
    },
    {
      question: `How do I find the cheapest dumpster rental in ${cityName}?`,
      answer: hasBizCount
        ? `With ${opts!.bizCount} dumpster rental companies in ${cityName}, the best way to find a cheap rate is to compare quotes from multiple providers — which is exactly what our free quote form does. Avoid overpaying by sizing correctly (renting too large is wasteful), asking about any hidden fees (fuel surcharges, overage charges), and booking early for non-urgent projects.`
        : `The best way to find cheap dumpster rental in ${cityName} is to compare quotes from multiple local companies — which is exactly what our free quote form does. Avoid overpaying by sizing correctly (renting too large is wasteful), asking about any hidden fees (fuel surcharges, overage charges), and booking early for non-urgent projects.`,
    },
  ]

  // Data-driven bonus FAQs
  if (hasBizCount) {
    faqs.push({
      question: `How many dumpster rental companies are in ${cityName}?`,
      answer: hasPopulation
        ? `There are ${opts!.bizCount} dumpster rental companies in ${cityName}, ${state}. With a population of ${opts!.population!.toLocaleString()}, ${cityName} has strong demand for waste removal services${county ? ` across ${county}` : ''}. Compare all ${opts!.bizCount} providers above to find the best price and availability for your project.`
        : `There are ${opts!.bizCount} dumpster rental companies in ${cityName}, ${state}. Compare all ${opts!.bizCount} providers listed above to find the best price and availability for your project.`,
    })
  }

  if (hasPrice) {
    faqs.push({
      question: `What is the average cost of a 20-yard dumpster in ${cityName}?`,
      answer: `The average cost of a 20-yard dumpster in ${cityName}, ${state} is ${opts!.avgPrice20yd}. This is the most popular size for home cleanouts and mid-size renovations. Actual prices may vary based on rental duration, debris type, and distance to the nearest landfill. Request free quotes above to get exact pricing from local companies.`,
    })
  }

  if (hasPopulation && hasBizCount) {
    faqs.push({
      question: `Is dumpster rental readily available in ${cityName}?`,
      answer: `Yes — with a population of ${opts!.population!.toLocaleString()} and ${opts!.bizCount} local dumpster rental companies, ${cityName} is well-served for waste removal needs. Most providers offer next-day delivery and 7-day rental periods. During peak season (spring and summer), booking 24–48 hours in advance is recommended.`,
    })
  }

  return faqs
}

// Generate state-level FAQ items
export function getStateFAQs(stateName: string, cityCount?: number) {
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
    ...(cityCount != null && cityCount > 0
      ? [
          {
            question: `How many cities in ${stateName} have dumpster rental service?`,
            answer: `We list dumpster rental providers in ${cityCount} cities across ${stateName}. Browse the full directory above to find companies in your area, or use our quote form to get matched with providers that serve your location.`,
          },
        ]
      : []),
  ]
}
