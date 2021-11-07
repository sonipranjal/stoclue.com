import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import HtmlToReactParser from 'html-to-react';
import axios from 'axios';
import LayoutComponent from '@/components/LayoutComponent';
import SingleLetter from '@/components/premiumNewsletter/SingleLetter';

const parser = HtmlToReactParser.Parser;
const htmlToReactParser = new parser();

const SinglePremiumNewsletterPage = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <LayoutComponent>
      <SingleLetter id={id} />
    </LayoutComponent>
  );
};

export default SinglePremiumNewsletterPage;
