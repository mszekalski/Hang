render() {

  return (
    <div className="channel-header-div">
      <h1 className="channel-topic-header">#
        {this.props.currentChannel.topic}</h1>
    </div>
  );
}
