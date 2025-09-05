import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул бежевый",
          img: "chair-1.jpg",
          desc: "Lorem ghbhbkisfsf,m",
          category: "chairs",
          prise: "49.90",
        },
        {
          id: 2,
          title: "Стул зеленый",
          img: "chair-2.jpg",
          desc: "Lorem ghbhbkisfsf,m",
          category: "chairs",
          prise: "39.90",
        },
        {
          id: 3,
          title: "Стул розовый",
          img: "chair-3.jpg",
          desc: "Lorem ghbhbkisfsf,m",
          category: "chairs",
          prise: "59.90",
        },
        {
          id: 4,
          title: "Стул белый",
          img: "chair-4.jpg",
          desc: "Lorem ghbhbkisfsf,m",
          category: "chairs",
          prise: "69.90",
        },
        {
          id: 5,
          title: "Диван синий",
          img: "sofa-1.jpg",
          desc: "Lorem ghbhbkisfsf,m",
          category: "sofa",
          prise: "159.90",
        },
        {
          id: 6,
          title: "Диван серый",
          img: "sofa-2.jpg",
          desc: "Lorem ghbhbkisfsf,m",
          category: "sofa",
          prise: "259.90",
        },
        {
          id: 7,
          title: "Стол-1",
          img: "table-1.jpg",
          desc: "Lorem ghbhbkisfsf,m",
          category: "tables",
          prise: "159.90",
        },
        {
          id: 8,
          title: "Стол-2",
          img: "table-2.jpg",
          desc: "Lorem ghbhbkisfsf,m",
          category: "tables",
          prise: "149.90",
        },
        {
          id: 9,
          title: "Стол-3",
          img: "table-3.jpg",
          desc: "Lorem ghbhbkisfsf,m",
          category: "tables",
          prise: "49.90",
        },
      ],
      showFullItem: false,
      fullItem: {}
    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
