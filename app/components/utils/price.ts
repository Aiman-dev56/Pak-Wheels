export const extractPrice = (priceString: string): number => {

    let price = priceString.replace("PKR", "").trim();

    if(price.includes("Cr")){
        price = price.replace("Cr", "").trim();
        return parseFloat(price)*100;
    }

    if(price.includes("lacs")){
        price = price.replace("lacs", "").trim();
        return parseFloat(price);
    }

    return parseFloat(price);
};