
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string; // Added category field
  variants?: Variant[]; // Added variants field
  stock: number; // Added stock field
}

interface Variant {
  type: string;
  value: string;
  price_modifier: number;
}

interface ProductFormProps {
  product?: Product;
}

const ProductForm = ({ product }: ProductFormProps) => {
  const [formData, setFormData] = useState<Product>({ name: '', description: '', price: 0, image: '', category: '', stock: 0 });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [productVariants, setProductVariants] = useState<Variant[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (product) {
      setFormData(product);
      setProductVariants(product.variants || []);
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVariantChange = (index: number, field: keyof Variant, value: string | number) => {
    const newVariants = [...productVariants];
    (newVariants[index] as any)[field] = value;
    setProductVariants(newVariants);
  };

  const addVariant = () => {
    setProductVariants(prev => [...prev, { type: '', value: '', price_modifier: 0 }]);
  };

  const removeVariant = (index: number) => {
    setProductVariants(prev => prev.filter((_, i) => i !== index));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let imageUrl = formData.image;

    if (selectedFile) {
      const uploadFormData = new FormData();
      uploadFormData.append('file', selectedFile);

      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      if (uploadRes.ok) {
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.url; // Get the URL of the uploaded image
      } else {
        alert('Image upload failed.');
        return;
      }
    }

    const url = product ? `/api/products/${product.id}` : '/api/products';
    const method = product ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, image: imageUrl, variants: productVariants }), // Include variants
    });

    if (res.ok) {
      router.push('/admin');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
        <input
          type="number"
          name="stock"
          id="stock"
          value={formData.stock}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
        <input
          type="text"
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="currentImage" className="block text-sm font-medium text-gray-700">Current Image URL</label>
        <input
          type="text"
          name="image"
          id="currentImage"
          value={formData.image}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">Upload New Image</label>
        <input
          type="file"
          name="imageUpload"
          id="imageUpload"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      <div className="border p-4 rounded-md">
        <h3 className="text-lg font-medium mb-2">Product Variants</h3>
        {productVariants.map((variant, index) => (
          <div key={index} className="flex space-x-2 mb-2 items-end">
            <div className="flex-grow">
              <label htmlFor={`variant-type-${index}`} className="block text-sm font-medium text-gray-700">Type</label>
              <input
                type="text"
                id={`variant-type-${index}`}
                value={variant.type}
                onChange={(e) => handleVariantChange(index, 'type', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                placeholder="e.g., Size, Color"
              />
            </div>
            <div className="flex-grow">
              <label htmlFor={`variant-value-${index}`} className="block text-sm font-medium text-gray-700">Value</label>
              <input
                type="text"
                id={`variant-value-${index}`}
                value={variant.value}
                onChange={(e) => handleVariantChange(index, 'value', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                placeholder="e.g., Small, Blue"
              />
            </div>
            <div>
              <label htmlFor={`variant-modifier-${index}`} className="block text-sm font-medium text-gray-700">Price Modifier</label>
              <input
                type="number"
                id={`variant-modifier-${index}`}
                value={variant.price_modifier}
                onChange={(e) => handleVariantChange(index, 'price_modifier', parseFloat(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                placeholder="e.g., 5.00"
              />
            </div>
            <button type="button" onClick={() => removeVariant(index)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addVariant} className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">Add Variant</button>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        {product ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;
