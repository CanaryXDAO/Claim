import airdrops from "../../config/airdrop";

const Header = () => {
  return (
    <header
      id="header"
      className="header-transparent"
      data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': false, 'stickyStartAt': 1, 'stickyHeaderContainerHeight': 70}"
    >
      <div className="header-body header-border-bottom overflow-visible">
        <div className="header-container container">
          <div className="header-row py-3">
            <div className="header-column flex-row w-auto">
              <div className="header-logo">
                <a href="index.html">
                  <img
                    src="img/demos/product-landing/logo.png"
                    alt="CanaryX"
                    width={123}
                    height={32}
                  />
                </a>
              </div>
            </div>
            <div className="header-column w-100 ps-lg-5">
              <div className="header-nav w-100 p-0">
                <div className="header-nav header-nav-line header-nav-bottom-line header-nav-bottom-line-effect-1 justify-content-start w-100">
                  <div className="header-nav-main header-nav-main-arrows header-nav-main-effect-2 header-nav-main-sub-effect-1 w-100">
                    <nav className="collapse w-100">
                      <ul className="nav nav-pills" id="mainNav">
                        <li>
                          <a
                            href="Create.html"
                            className="nav-link"
                            data-hash=""
                            data-hash-offset={0}
                            data-hash-offset-lg={70}
                          >
                            Create
                          </a>
                        </li>
                        <li className="dropdown">
                          <a
                            className="dropdown-item"
                            data-hash=""
                            data-hash-offset={0}
                            data-hash-offset-lg={70}
                            href="coming-soon.html"
                          >
                            Trade
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                href="coming-soon.html"
                                className="dropdown-item"
                              >
                                Swap
                              </a>
                            </li>
                            <li>
                              <a
                                href="coming-soon.html"
                                className="dropdown-item"
                              >
                                Exchange
                              </a>
                            </li>
                            <li>
                              <a
                                href="coming-soon.html"
                                className="dropdown-item"
                              >
                                Liquidity
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            className="dropdown-item"
                            data-hash=""
                            data-hash-offset={0}
                            data-hash-offset-lg={70}
                            href="coming-soon.html"
                          >
                            Earn
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                href="coming-soon.html"
                                className="dropdown-item"
                              >
                                Farms
                              </a>
                            </li>
                            <li>
                              <a
                                href="coming-soon.html"
                                className="dropdown-item"
                              >
                                Pools
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            className="dropdown-item"
                            data-hash=""
                            data-hash-offset={0}
                            data-hash-offset-lg={80}
                            href="coming-soon.html"
                          >
                            IFO
                          </a>
                        </li>
                        <li className="dropdown">
                          <a
                            className="dropdown-item"
                            data-hash=""
                            data-hash-offset={0}
                            data-hash-offset-lg={80}
                            href="https://canaryx.xyz/nft"
                          >
                            NFT
                          </a>
                        </li>
                        <li className="dropdown">
                          <a
                            className="dropdown-item"
                            data-hash=""
                            data-hash-offset={0}
                            data-hash-offset-lg={80}
                            href="https://canaryx.xyz"
                          >
                            CNYX
                          </a>
                        </li>

                
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-column flex-row w-auto justify-content-end">
            <div className="header-nav-features ps-0 ms-1"></div>
            <button
              className="btn header-btn-collapse-nav ms-3"
              data-bs-toggle="collapse"
              data-bs-target=".header-nav-main nav"
            >
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
