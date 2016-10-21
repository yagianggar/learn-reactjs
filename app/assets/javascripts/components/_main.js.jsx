var Main = React.createClass({
  getDefaultProps() {
    return { name: 'Stranger' }
  },
  getInitialState() {
    /*return {
      author: 'Yagi'
    }*/
    return { items: [] }
  },
  handleChange(e) {
    this.setState({
      //author: e.target.value
      author: this.refs.name.value
    })
  },
  componentDidMount() {
    var url = 'https://jsonplaceholder.typicode.com/posts';
    $.getJSON(url, (response) => {
      this.setState({ items: response })
    });
  },
  render() {
    var itemContent = this.state.items.map((item) => { return(
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    )});
    return (
      <div>
        <h1>Hello bro, from reactJs!</h1>
        <p>{ this.props.name }</p>
        <p>{ this.props.message }</p>
        <p>{ this.state.author }</p>
        <input type="text" ref="name" placeholder="Enter the Name" onChange={this.handleChange} />
        <Body/>
        <div> {itemContent} </div>
      </div>
    )
  }
});
