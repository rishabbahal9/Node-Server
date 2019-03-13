const products=[];
module.exports=class Product
{
    constructor(t)
    {
        this.title=t;
    }
    saveTitle()
    {
        products.push(this.title)
    }
    setTitle(t)
    {
        this.title=title;
    }
    getTitle()
    {
        return this.title;
    }
    static fetchAll()
    {
        return products;
    }
}
