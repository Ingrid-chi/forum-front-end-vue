// 先將 moment 載入近來
import moment from "moment";

export const fromNowFilter = {
  filters: {
    fromNow(dateTime) {
      return dateTime ? moment(dateTime).fromNow() : "-";

      // 未縮寫如下:
      // fromNow(datatime) {
      //   if (!datatime) {
      //     return "-";
      //   }
      //   // 使用 moment 提供的 fromNow 方法
      //   return `--- ${moment(datatime).fromNow()}`;
      // },
    },
  },
};

// import { emptyImageFilter } from "./../utils/mixins";
export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || "https://via.placeholder.com/350x220/DFDFDF?text=No+Image";
    },
  },
};
