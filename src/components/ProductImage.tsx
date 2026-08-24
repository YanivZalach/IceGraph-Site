interface ProductImageProps {
  alt: string;
  filename: string;
  isPriority?: boolean;
}

const ProductImage = ({
  alt,
  filename,
  isPriority = false,
}: ProductImageProps) => (
  <img
    className="product-image"
    src={`${import.meta.env.BASE_URL}media/product/${filename}`}
    alt={alt}
    width="1440"
    height="900"
    loading={isPriority ? "eager" : "lazy"}
    fetchPriority={isPriority ? "high" : "auto"}
  />
);

export default ProductImage;
