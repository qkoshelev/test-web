import axios from 'axios';
import qs from 'qs';
import { assign, mapValues } from 'lodash';
import api from './api';

const api2 = {
  ...api,
};

function alphabeticalSort(a, b) {
  return a.localeCompare(b);
}

const QS_CONFIG = {
  indices: false,
  sort: alphabeticalSort,
};

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  undefined, error => Promise.reject(error),
);

export const buildQuery = params => params ? qs.stringify(params, QS_CONFIG) : '';

const endpointToBuilder = (definition) => {
  const {
    method = 'get',
    data,
    result,
  } = definition;
  const builder = (...args) => {
    const url = definition.url(...args);
    return {
      send: (payload, config = {}) => {
        if (payload && data) {
          throw new Error('Endpoint cannot have predefined data and payload at the same time.');
        }

        const query = buildQuery(config.params);
        const promise = axiosInstance.request({
          url,
          method,
          data: payload || data,
          responseType: 'json',
          paramsSerializer: () => query,
          ...config,
        }).then((json) => {
          let response = json;
          if (result) {
            response = result(json);
          }
          return response;
        });

        return promise;
      },
    };
  };

  return assign(builder, {
    ...definition,
  });
};
export default mapValues(api2, endpointToBuilder);
