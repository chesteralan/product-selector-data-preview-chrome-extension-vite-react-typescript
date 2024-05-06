import * as S from "./CollectionPage.styles";

type Props = {
  data: any;
  toggleMatrix: any;
};

const CollectionPage = ({ data, toggleMatrix }: Props) => {
  const pages = data?.props?.pageProps?.initialPagesQueryStore?.pages;
  return (
    <>
      <div style={S.Wrapper} onClick={toggleMatrix} />
      <div style={S.Container}>
        <strong>Collection Page Matrix ({pages.length})</strong>
        <table style={S.Table}>
          <thead>
            <tr style={S.TableRow}>
              <th style={{ ...S.TableHead, paddingLeft: 5 }}>Pages</th>
              <th style={S.TableHead}>SKU</th>
              <th style={S.TableHead}>Discount Code</th>
              <th style={S.TableData}>RRP</th>
              <th style={S.TableData}>Price</th>
              <th style={S.TableData}>Rate</th>
              <th style={S.TableData}>Variant IDs</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page: any) => {
              const subPrices = page?.products?.at(0)?.prices?.sub?.at(0);
              const otpPrices = page?.products?.at(0)?.prices?.otp?.at(0);
              const sku = page?.products?.at(0)?.sku;
              const prices = subPrices || otpPrices;
              return (
                <tr key={page.id} style={S.TableRow}>
                  <td style={{ paddingLeft: 5 }}>
                    <strong>
                      <a
                        href={`/products${page.urlPath}`}
                        dangerouslySetInnerHTML={{ __html: page.title }}
                      />
                    </strong>
                  </td>
                  <td>{sku}</td>
                  <td>{page?.productDiscountCode?.code}</td>
                  <td style={S.TableData}>
                    ${prices?.perceived_rrp?.toFixed(2)}
                  </td>
                  <td style={S.TableData}>
                    ${prices?.discounted_price?.toFixed(2)}
                  </td>
                  <td style={S.TableData}>
                    {Math.round(
                      100 -
                        (prices?.discounted_price / prices?.perceived_rrp) *
                          100,
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
      </div>
    </>
  );
};

export default CollectionPage;
