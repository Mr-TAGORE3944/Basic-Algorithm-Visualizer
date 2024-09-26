import React, { Component } from "react";

class Details extends Component {
  Switcherr = () => {
    console.log(this.props.algo);
    if (this.props.algo === 0) {
      return (
        <div className="px-1 lg:px-4 py-2 flex flex-col gap-1 ">
          <div className=" font-medium tracking-tight  bg-yellow-300 p-2">
            The Fibonacci sequence, in which each number is the sum of the two
            preceding ones. The sequence commonly starts from 0 and 1.
          </div>
          <hr />
          <div className="col-3 card me-1 bg-light">
            N = Nth Fibonacci Number
          </div>
          <div className="col-3 card me-1 bg-light">function = Fib(n)</div>
          <hr />
          <div className="col-3 card me-1 bg-light">
            Fib(0) = 0 <br />
            Fib(1) = 1 <br />
            Fib(n) = Fib(n-1) + Fib(n-2)
          </div>
          <hr />
        </div>
      );
    } else if (this.props.algo == 1) {
      return (
        <div className=" px-1 lg:px-4 py-2 flex flex-col gap-1 ">
          <div className=" font-medium tracking-tight  bg-yellow-300 ">
            In mathematics, the binomial coefficients are the positive integers
            that occur as coefficients in the binomial theorem.
          </div>
          <hr />
          <div className="col-3 card me-1 bg-light">
            nCr = n! / ( k! * (n-k)! )
          </div>
          <div className="col-3 card me-1 bg-light">function = nCr(n, r)</div>
          <hr />
          <div className="col-3 card me-1 bg-light">
            nCr(a, a) = 1 <br />
            nCr(a, 0) = 1 <br />
            nCr(n, r) = nCr(n-1, r-1) + nCr(n-1, r)
            <hr />
          </div>
        </div>
      );
    } else if (this.props.algo == 2) {
      return (
        <div className="px-1 lg:px-4 py-2 flex flex-col gap-1 ">
          <div className=" bg-yellow-300  font-medium tracking-tight ">
            In combinatorial mathematics, a derangement is a permutation of the
            elements of a set, such that no element appears in its original
            position.
          </div>
          <hr />
          <div className="col-3 card me-1 bg-light">N = Nth Derangement</div>
          <div className="col-3 card me-1 bg-light">function = der(n)</div>
          <hr />
          <div className="col-3 card me-1 bg-light">
            der(0) = 1 <br />
            der(1) = 0 <br />
            der(n) = (n-1) * ( der(n-1) + der(n-2) )
            <hr />
          </div>
        </div>
      );
    } else if (this.props.algo == 3) {
      return (
        <div className="px-1 lg:px-4 py-2 flex flex-col gap-1 ">
          <div className="bg-yellow-300  font-medium tracking-tight ">
            N = Number P = Power
          </div>
          <hr />
          <div className="col-3 card me-1 bg-light">
            function = bigmod(n, p)
          </div>
          <div className="col-3 card me-1 bg-light">
            bigmod(a, 0) = 1 <br />
            bigmod(a, 1) = a <br />
            bigmod(n, p) = bigmod(n, p/2)^2; p is even <br />
            bigmod(n, p) = bigmod(n, (p-1)/2)^2 * n; p is odd
          </div>
          <hr />
        </div>
      );
    } else if (this.props.algo == 4) {
      return (
        <div className="px-1 lg:px-4 py-2 flex flex-col gap-1 ">
          <div className="bg-yellow-300  font-medium tracking-tight ">
            A Stirling number of the second kind (or Stirling partition number)
            is the number of ways to partition a set of n objects into k
            non-empty subsets.
          </div>
          <hr />
          <div className="col-3 card me-1 bg-light">N = Row R = Column</div>
          <hr />
          <div className="col-3 card me-1 bg-light">function = stir2(n, r)</div>
          <div className="col-3 card me-1 bg-light">
            stir2(a, a) = 1 <br />
            stir2(0, a) = 0 <br />
            stir2(n, r) = stir2(n-1, r) * r + stir2(n-1, r-1)
          </div>
          <hr />
        </div>
      );
    }
  };

  render() {
    return <div>{this.Switcherr()}</div>;
  }
}

export default Details;
