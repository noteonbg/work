function Hello() {
  return <h1>Hello, world!</h1>;
}


/* when props or state does not change react will not render the page again */

export default Hello;

/*

React renders the <h1> element to the DOM once when
 the component mounts.
No state or props = no re-renders after this.
*/