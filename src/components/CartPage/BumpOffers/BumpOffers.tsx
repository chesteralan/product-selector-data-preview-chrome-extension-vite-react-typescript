import React from "react";
import * as S from "../CartPage.styles";

type ProductsProps = {
  bumpOffers: any;
};
const BumpOffers = ({ bumpOffers }: ProductsProps) => {
  return (
    <table style={S.Table}>
      <thead>
        <tr style={S.TableRow}>
          <th style={{ ...S.TableHead, paddingLeft: 5 }}>
            Product ({bumpOffers.length})
          </th>
          <th style={{ ...S.TableHead, paddingLeft: 5 }}>SKU</th>
          <th style={S.TableHead}>Discount Code</th>
          <th style={S.TableData}>RRP</th>
          <th style={S.TableData}>Price</th>
          <th style={S.TableData}>Rate</th>
          <th style={S.TableData}>Variant IDs</th>
        </tr>
      </thead>
      <tbody>
        {bumpOffers.map((bumpOffer: any) => {
          const subPrices = bumpOffer?.prices?.sub?.at(0);
          const otpPrices = bumpOffer?.prices?.otp?.at(0);
          const sku = bumpOffer?.product?.sku;
          const prices = subPrices || otpPrices;
          return (
            <tr key={bumpOffer.id} style={S.TableRow}>
              <td style={{ paddingLeft: 5 }}>
                <strong>{bumpOffer.label}</strong>
              </td>
              <td>{sku}</td>
              <td>{bumpOffer?.discountCode?.code}</td>
              <td style={S.TableData}>${prices?.perceived_rrp?.toFixed(2)}</td>
              <td style={S.TableData}>
                ${prices?.discounted_price?.toFixed(2)}
              </td>
              <td style={S.TableData}>
                {Math.round(
                  100 -
                    (prices?.discounted_price / prices?.perceived_rrp) * 100,
                )}
                %
              </td>
              <td style={S.TableData}>
                {subPrices?.variant_id && (
                  <>
                    <small>SUB: {subPrices?.variant_id}</small>
                    <br />
                  </>
                )}
                {otpPrices?.variant_id && (
                  <small>OTP: {otpPrices?.variant_id}</small>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BumpOffers;
