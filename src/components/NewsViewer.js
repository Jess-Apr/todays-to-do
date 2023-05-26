import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function NewsViewer() {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
}