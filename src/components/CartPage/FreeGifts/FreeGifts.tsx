import React from "react";
import * as S from "../CartPage.styles";

type ProductsProps = {
  freeGifts: any;
};
const FreeGifts = ({ freeGifts }: ProductsProps) => {
  return (
    <table style={S.Table}>
      <thead>
        <tr style={S.TableRow}>
          <th style={{ ...S.TableHead, paddingLeft: 5 }}>
            Product ({freeGifts.length})
          </th>
          <th style={{ ...S.TableHead, paddingLeft: 5 }}>SKU</th>
          <th style={S.TableData}>Price</th>
          <th style={S.TableData}>Variant ID</th>
        </tr>
      </thead>
      <tbody>
        {freeGifts.map((freeGift: any) => {
          const sku = freeGift?.product?.sku;
          return (
            <tr key={freeGift.id} style={S.TableRow}>
              <td style={{ paddingLeft: 5 }}>
                <strong>{freeGift.product.name}</strong>
              </td>
              <td>{sku}</td>
              <td style={S.TableData}>${freeGift?.rrpPrice}</td>
              <td style={S.TableData}>{freeGift.variantId}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FreeGifts;
