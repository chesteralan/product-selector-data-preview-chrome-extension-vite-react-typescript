import * as S from '../styles'
import formatPrice from '../../../../utils/formatPrice';
import useConfig from '../../../../hooks/useConfig';

type Props = {
    productId: string;
    prices: any;
    discountCodes: any;
    upsellUrl: string;
}

const Product = ({ productId, prices, discountCodes, upsellUrl }: Props) => {

  const { devToolUrl, strapiServerUrl } = useConfig();

  const editProductHandler = () => {
    window.open(`${strapiServerUrl}/admin/content-manager/collectionType/api::product.product/${productId}`, "_blank");
  }
  
  return (
    <div style={S.ProductsContainer}> 
    <a href="#" style={S.EditProduct} onClick={editProductHandler}>Edit Product</a>
    <p>
            <u>Upsell URL:</u> <strong><a href={`${upsellUrl}/token`} target="_blank" style={S.ALink}>{upsellUrl}</a></strong>
            </p>
            <p>
              <u>Products</u>
            </p>
            <ul style={S.UList}>
              {prices.map((item: any, index: number) => {
                const variantLink = `${devToolUrl}/checkout-data-checker?country=${item.country}&variant_id=${item.variant_id}&discount_code=${discountCodes}&quantity=${item.quantity}`;
                return (
                  <li key={index} style={S.UListItem}>
                    <strong>Name</strong>: {item.title}
                    <br />
                    <strong>Variant ID</strong>:{" "}
                    <a href={variantLink} target="_blank" style={S.ALink}>
                      {item.variant_id}
                    </a>
                    <br />
                    <strong>Quantity</strong>: {item.quantity}
                    <br />
                    <strong>RRP</strong>:{" "}
                    {formatPrice(item.perceived_rrp, item.country)}
                    <br />
                    <strong>Sales Price</strong>:{" "}
                    {formatPrice(item.discounted_price, item.country)}
                    <br />
                    <strong>Savings</strong>:{" "}
                    {formatPrice(
                      item.perceived_rrp - item.discounted_price,
                      item.country
                    )}{" "}
                    {" - "}
                    <small>
                      {(
                        ((item.perceived_rrp - item.discounted_price) /
                          item.perceived_rrp) *
                        100
                      ).toFixed(2)}
                      %
                    </small>
                    <br />
                    <strong>
                      Price per chew <small>({30 * item.quantity} chews)</small>
                    </strong>
                    :{" "}
                    {formatPrice(
                      item.discounted_price / (30 * item.quantity),
                      item.country
                    )}{" "}
                    <small>
                      (Savings:{" "}
                      {formatPrice(
                        (item.perceived_rrp - item.discounted_price) /
                          (30 * item.quantity),
                        item.country
                      )}
                      )
                    </small>
                    <br />
                    <strong>Price per tub</strong>:{" "}
                    {formatPrice(
                      item.discounted_price / item.quantity,
                      item.country
                    )}
                    <br />
                    
                  </li>
                );
              })}
            </ul>
    </div>
  )
}

export default Product