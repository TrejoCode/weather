/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Page /home
 */

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentAction } from "../../redux/actions";
import Search from "components/Search";
import AsideCurrent from "components/Aside/Current";
import ErrorSection from "components/Error";
import Card from "components/Card";

const PageHome = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  /**
   * @description Fetch initial weather
   */
  useEffect(() => {
    dispatch(getCurrentAction("cancun"));
  }, [dispatch]);

  return (
    <div className="home justify-center align-center">
      <div className="wrapper row-responsive">
        <aside className="column">
          <Search />
          <AsideCurrent data={weather} error={error} loading={loading} />
        </aside>
        <div className="__content column">
          <nav>
            <ul>
              <li className="color-primary weight-semi">This Week</li>
            </ul>
          </nav>
          <main className="column">
            <div className="__cards__container justify-center align-center wrap">
              {error ? (
                <ErrorSection error={error} />
              ) : (
                <Card data={weather} loading={loading} />
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageHome;
